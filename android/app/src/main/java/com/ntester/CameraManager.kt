package com.ntester


import android.content.Intent
import android.os.Bundle
import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class CameraManager(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Camera"
    }

    @ReactMethod
    fun camera(cameraHeader: String, surveyCount: String, message: String, flag: Boolean,endSurveyFlag: Boolean, promise: Promise) {
        val intent = Intent(reactApplicationContext, CameraActivity::class.java)
        intent.putExtra(CameraConstants.CAMERA_HEADER, cameraHeader);
        intent.putExtra(CameraConstants.SURVEY_COUNT, surveyCount);
        intent.putExtra(CameraConstants.CLIP_MESSAGE, message);
        intent.putExtra(CameraConstants.MESSAGE_FLAG, flag);
        intent.putExtra(CameraConstants.END_SURVEY_FLAG, endSurveyFlag);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        promise.resolve(reactApplicationContext.startActivityForResult(intent, 100, Bundle()))
    }

    @ReactMethod
    fun killClass() {
        if (CameraActivity.activity != null) CameraActivity.activity.finish()
    }
}

