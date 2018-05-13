package com.ekkbaz.business;

import android.app.Application;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.filepicker.FilePickerPackage;
import io.invertase.firebase.RNFirebasePackage;
import io.invertase.firebase.firestore.RNFirebaseFirestorePackage;
import com.rt2zz.reactnativecontacts.ReactNativeContacts;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.azendoo.reactnativesnackbar.SnackbarPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.imagepicker.ImagePickerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new RCTCameraPackage(),
                    new MainReactPackage(),
                    new FilePickerPackage(),
                    new RNFirebasePackage(),
                    new RNFirebaseFirestorePackage(),
                    new ReactNativeContacts(),
                    new RNFetchBlobPackage(),
                    new ReactNativeLocalizationPackage(),
                    new SnackbarPackage(),
                    new MapsPackage(),
                    new ImagePickerPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
