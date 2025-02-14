---
keywords:
  - Breaking changes
  - Added
  - Known Issues
  - Embed SDK changelog
  - Changelog
title: Changelog
description: All notable changes are documented in this page.
contributors:
  - https://github.com/amandahuarng
---

# Changelog

<InlineAlert variant="error" slots="header, text1, text2" />

IMPORTANT: Deprecation Warning

We are no longer approving integrations using v1 or v2 of the SDK - both versions will be deprecated later this year.

While we are in beta, all v3 clients are disabled by default. **Please share your API key with amandah@adobe.com to begin development.**

## [3.8.11] - 2023-08-25

### Enhancements

- `ConfigParams.skipBrowserSupportCheck`: By default, this property is set to false and users will encounter an "Unsupported Browser" page when launching a design flow. When this property is configured to true and the browser is not supported, calling `initialize()` will **not** result in an error.

## [3.7.14] - 2023-08-15

### Added

- ExportButton.accent: The variant option 'cta' has been replaced with 'accent'. Both 'cta' and 'accent' work the same but the support for 'cta' is deprecated as per Spectrum guidelines.
- We will not support the following two quick actions: Reverse Video and Change Speed
- Added a new video quick action: Animate From Audio. This allows users to create a character animation by choosing a character from the given list of characters, adding a backdrop and then recording a speech.

### Breaking Changes

- ExportButton.id is now a required property on native buttons

## [3.6.16] - 2023-08-06

### Enhancements

- CreateOutputParams.allowedFileTypes: We now support the following four file types: image/png, image/jpeg, application/pdf and video/mp4. Client apps will now be able to restrict the export options shown to end users by passing the relevant file type in allowedFileTypes property. This is also relevant of mixed media.
- EditOutputParams.allowedFileTypes: We now support the following four file types: image/png, image/jpeg, application/pdf and video/mp4. Client apps will now be able to restrict the export options shown to end users by passing the relevant file type in allowedFileTypes property. This is also relevant of mixed media.

### Added

- Video Export: Users will now be able to export assets as MP4 files. In order to do this, there must be a video asset added in the canvas to see the option in the export options dropdown for custom buttons. Pass video/mp4 option in allowedFileTypes.
- Mixed Media Support: Users will be able to download mixed media assets. In case they have added an image in one page and video in another, they will now be able to see JPG + MP4 or PNG + MP4 in the export options dropdown for custom buttons.Pass image/jpeg, image/png and video/mp4 option in allowedFileTypes.

## [2.0.8] - 2023-02-02

### Added

- Browser compatibility checker: Now the SDK will check for browser compatibility during initialization.
- New default method `terminate()` allows you to terminate an active instance of CCEverywhere. This method will return false if there is no active CCEverywhere instance.
- Google YOLO will work for both the full editor and quick actions. If the user is not signed in, the YOLO prompt will be shown to users. If the user has multiple Google accounts, they can select from a list.
  - If the user has an Adobe account associated with Google ID, the user is signed in.
  - If the user does not have an Adobe account associated with the Google ID, a new Adobe account will be created for the user using their Google ID.
  - User can choose to dismiss the YOLO modal and continue with delayed login.
  - Redirect URI is no longer being used.

### Breaking Changes

- `initialize()` method is now async. This is the main API used for initializing the SDK. It will return a promise with a CCEverywhere object which can be used to call other APIs in the SDK.

## [1.5.4] - 2022-12-16

### Added

- Enabled "Logged Out" experience for image and video quick actions

### Bug Fixes

- Fixed the problem with the editor iFrame not auto-closing post publish (for the scenario when the editor is launched from image quick actions via "Customize in Express" workflow)
- Fixed an issue related to pre-caching of resources for the editor

### Known Issues

- Currently, the "Customize in Express" workflow from the "Remove Background" image quick action is not working. The fix will be deployed in a future version.

## [1.4.10] - 2022-11-14

### Added

- Delayed Login experience in the full editor.
  - With this release of the SDK, we are enabling users to launch the full editor without having to log in first. The user can sign in 1) once the Adobe Express iFrame launches, or 2) continue to work on the document until they decide to publish/save -- at which point they would be prompted to sign in. The delayed login experience is available out-of-the-box with this version of the SDK and developers do not have to make any changes to enable this experience.
- "Create from Image" workflow.
  - Users can now create from an image instead of a blank canvas. This workflow works with the delayed login experience. To use this workflow, partners will need to enable the host application to use it.

## [1.3.11] - 2022-08-24

### Added

- SDK bundled for browsers, hosted on Adobe CDN.
- Welcome Screen before the Single User Sign In screen appears.
- Ability to log out from the full editor loaded in the iFrame.

### Bug Fixes

- Signing-in from the welcome screen, subsequent to a sign-out, successfully launches the full editor iFrame.

### Known Issues

- Opening asset in the full editor, subsequent to performing an image quick action, and saving the asset doesn't close the iFrame automatically. This will be fixed in the next release.
- When a quick action is performed and the resulting asset is opened in a full editor: after the user makes changes and saves it the asset is saved outside of the designated project folder in the user's Adobe Express account.

## [1.1.0] - 2022-04-09

### Enhancements

- Scrim view background color is now configurable.
- Redirect URI can now be provided as input during initialization.
- `appVersion` and `platformCategory` are now optional arguments.
- In dev environments, SDK is now able to read and override the base URL from the client's window object.
- API provided to easily identify the SDK version running in browser or host apps.
- Update Content will now be displayed in 100% of the area of the client div,  instead of appearing with scrollbars.
- Adobe IMS related enhancements.

### Bug Fixes

- When `parentElementId` is supplied, the dimensions of the parent container display Scrim view instead of Viewport.
- QA loader screen can be now set to the darkest theme.
- iFrame now loads successfully on Safari even if pop-up blocker settings are enabled.
- Enhanced error handling for failure to launch iFrame for quick action and full editor.
- Full editor iFrame now honoring 0 border radius value.
