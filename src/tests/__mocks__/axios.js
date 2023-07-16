export default {
    create: jest.fn(() => ({
        // Mock your Axios methods and return mock responses
        // For example:
        post: jest.fn(() => Promise.resolve({ data: {} })),
    })),
};