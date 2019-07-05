module.exports = {
    jest: {
        configure: (jestConfig) => {
            jestConfig.setupFilesAfterEnv = ['./setupTests.js'];
            jestConfig.snapshotSerializers = ['enzyme-to-json/serializer'];

            return jestConfig;
        }
    },
};
