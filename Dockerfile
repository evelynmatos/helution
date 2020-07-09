FROM beevelop/ionic:next

RUN echo y | android update sdk --no-ui --all --filter "android-28"
RUN echo y | $ANDROID_HOME/tools/bin/sdkmanager --update


