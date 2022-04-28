const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { Tours } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
            },
            // get all tours by destination
            tours: async (parent, args, context) => {
                 if (context.tours) {
                    //const toursData = await Tours.findByFields({ tourDestination: Tours.context.tourDestination }) 
                    const toursData = await Tours.find({ tourDestination: searchInput })
                    console.log(toursData);
                    // Code below can be removed.  It was used for testing purposes.
                    // const toursData = await Tours.findOne();             
                    return toursData;
                }
                throw new AuthenticationError('No context.tour.');
            }
        },
    //     // get all tours by entered searchDestination
    //     tours: async (parent, { searchDestination }) => {
    //         const params = tourDestination ? { searchDestination } : {};
    //         return Thought.find(params).sort({ createdAt: -1 });
    //     }
    // },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addTour: async (parent, { tourId, tourGuide, tourDestination, tourName, image, description }) => {
            const tour = await Tours.create({ tourId, tourGuide, tourDestination, tourName, image, description });
            // const token = signToken(user);
            return tour;
        },
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        saveTour: async (parent, args, context) => {
            if (context.user) {

                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedTours: { ...args } } },
                    { new: true, runValidators: true }
                );
                return user;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeTour: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedTours: { tourId: args.tourId } } },
                    { new: true }
                );

                return user;
            }

            throw new AuthenticationError('You need to be logged in to cancel a tour.');
        }
    }
};
module.exports = resolvers;