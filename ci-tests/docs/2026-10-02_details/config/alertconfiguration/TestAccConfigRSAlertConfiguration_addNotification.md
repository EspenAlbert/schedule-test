# config/alertconfiguration/TestAccConfigRSAlertConfiguration_addNotification Test Details
# Found 39 TestRuns in dev, qa from 2026-09-02 to 2026-10-02 from master branch: 1 unique tests, PASS(x 29) FAIL(x 10)
Success rate: 74.36%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-25 00:45](#error-2026-09-25t0045010000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6ab5c3b5bf8e3e34f1eeb0e1/alertConfigs | dev |  | 9.10s
[2026-09-26 00:43](#error-2026-09-26t0043010000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6ab714ec48c0e9ef9a61b0a7/alertConfigs | dev | flaky_500 | 3.07s
[2026-09-28 00:50](#error-2026-09-28t0050540000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6ab9b9997d727e1308a24577/alertConfigs | dev | flaky_500 | 7.08s
[2026-09-29 00:46](#error-2026-09-29t0046200000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6abb0a334c7c90ca62ec67c5/alertConfigs | dev |  | 2.09s
[2026-09-29 10:44](#error-2026-09-29t1044380000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6abb96635195ae6779237fda/alertConfigs | dev |  | 4.02s
[2026-09-29 12:47](#error-2026-09-29t1247500000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6abbb33ea06cddcbdfce7df9/alertConfigs | dev |  | 5.03s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02 PASS 25 seconds
- 2026-09-03 PASS 17 seconds
- 2026-09-04 PASS 24 seconds
- 2026-09-05 PASS 10 seconds
- 2026-09-06: MISSING
- 2026-09-07 PASS 31 seconds
- 2026-09-08 PASS 17 seconds
- 2026-09-09 PASS 15 seconds
- 2026-09-10
  - PASS 18 seconds
  - PASS 38 seconds
- 2026-09-11
  - PASS 15 seconds
  - PASS 21 seconds
- 2026-09-12 PASS 10 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 14 seconds
- 2026-09-15 PASS 12 seconds
- 2026-09-16 PASS 41 seconds
- 2026-09-17 PASS 11 seconds
- 2026-09-18 PASS 14 seconds
- 2026-09-19 PASS 14 seconds
- 2026-09-20: MISSING
- 2026-09-21 PASS 38 seconds
- 2026-09-22 PASS 19 seconds
- 2026-09-23 PASS 42 seconds
- 2026-09-24 PASS 18 seconds
- 2026-09-25

### Error 2026-09-25T00:45:01+00:00
```
2026-09-25T00:45:01.9058726Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-25T00:45:01.9083367Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-25T00:45:01.9122367Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-25T00:45:01.9123184Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-25T00:45:01.9123627Z         
2026-09-25T00:45:01.9124275Z         Error: error creating Alert Configuration information: %s
2026-09-25T00:45:01.9124670Z         
2026-09-25T00:45:01.9125183Z           with mongodbatlas_alert_configuration.test,
2026-09-25T00:45:01.9126065Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-25T00:45:01.9127189Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-25T00:45:01.9127660Z         
2026-09-25T00:45:01.9128357Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab5c3b5bf8e3e34f1eeb0e1/alertConfigs
2026-09-25T00:45:01.9129338Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-25T00:45:01.9130312Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-25T00:45:01.9131041Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-25T00:45:01.9131713Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (9.97s)
```

- 2026-09-26

### Error 2026-09-26T00:43:01+00:00
```
2026-09-26T00:43:01.0404832Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-26T00:43:01.0427938Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-26T00:43:01.0448233Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-26T00:43:01.0448842Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-26T00:43:01.0449270Z         
2026-09-26T00:43:01.0449631Z         Error: error creating Alert Configuration information: %s
2026-09-26T00:43:01.0450017Z         
2026-09-26T00:43:01.0450344Z           with mongodbatlas_alert_configuration.test,
2026-09-26T00:43:01.0451001Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-26T00:43:01.0451638Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-26T00:43:01.0451945Z         
2026-09-26T00:43:01.0452501Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab714ec48c0e9ef9a61b0a7/alertConfigs
2026-09-26T00:43:01.0453198Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-26T00:43:01.0453766Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-26T00:43:01.0454287Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-26T00:43:01.0454666Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (3.68s)
```

- 2026-09-27: MISSING
- 2026-09-28

### Error 2026-09-28T00:50:54+00:00
```
2026-09-28T00:50:54.6427977Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-28T00:50:54.6458757Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-28T00:50:54.6494658Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-28T00:50:54.6495381Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-28T00:50:54.6495850Z         
2026-09-28T00:50:54.6496280Z         Error: error creating Alert Configuration information: %s
2026-09-28T00:50:54.6496652Z         
2026-09-28T00:50:54.6497164Z           with mongodbatlas_alert_configuration.test,
2026-09-28T00:50:54.6498353Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-28T00:50:54.6499190Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-28T00:50:54.6499584Z         
2026-09-28T00:50:54.6500160Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6ab9b9997d727e1308a24577/alertConfigs
2026-09-28T00:50:54.6500912Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-28T00:50:54.6501611Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-28T00:50:54.6502185Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-28T00:50:54.6502637Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (7.81s)
```

- 2026-09-29
  - FAIL 2 seconds

### Error 2026-09-29T00:46:20+00:00
```
2026-09-29T00:46:20.5804180Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T00:46:20.5867890Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T00:46:20.5893040Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T00:46:20.5893829Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-29T00:46:20.5894374Z         
2026-09-29T00:46:20.5894927Z         Error: error creating Alert Configuration information: %s
2026-09-29T00:46:20.5895396Z         
2026-09-29T00:46:20.5895889Z           with mongodbatlas_alert_configuration.test,
2026-09-29T00:46:20.5896860Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-29T00:46:20.5897770Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-29T00:46:20.5898243Z         
2026-09-29T00:46:20.5899009Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb0a334c7c90ca62ec67c5/alertConfigs
2026-09-29T00:46:20.5900019Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-29T00:46:20.5900942Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-29T00:46:20.5901663Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-29T00:46:20.5902248Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (2.89s)
```

  - FAIL 4 seconds

### Error 2026-09-29T10:44:38+00:00
```
2026-09-29T10:44:38.0344042Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T10:44:38.0472635Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T10:44:38.0564856Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T10:44:38.0565973Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-29T10:44:38.0566922Z         
2026-09-29T10:44:38.0567687Z         Error: error creating Alert Configuration information: %s
2026-09-29T10:44:38.0568365Z         
2026-09-29T10:44:38.0569061Z           with mongodbatlas_alert_configuration.test,
2026-09-29T10:44:38.0570412Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-29T10:44:38.0571696Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-29T10:44:38.0572372Z         
2026-09-29T10:44:38.0573430Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abb96635195ae6779237fda/alertConfigs
2026-09-29T10:44:38.0574812Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-29T10:44:38.0576259Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-29T10:44:38.0577268Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-29T10:44:38.0578067Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (4.20s)
```

  - FAIL 5 seconds

### Error 2026-09-29T12:47:50+00:00
```
2026-09-29T12:47:50.9349906Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T12:47:50.9380915Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T12:47:50.9404523Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T12:47:50.9405148Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-29T12:47:50.9405571Z         
2026-09-29T12:47:50.9405998Z         Error: error creating Alert Configuration information: %s
2026-09-29T12:47:50.9406375Z         
2026-09-29T12:47:50.9406759Z           with mongodbatlas_alert_configuration.test,
2026-09-29T12:47:50.9407652Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-29T12:47:50.9408360Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-29T12:47:50.9408731Z         
2026-09-29T12:47:50.9409322Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6abbb33ea06cddcbdfce7df9/alertConfigs
2026-09-29T12:47:50.9410093Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-29T12:47:50.9410814Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-29T12:47:50.9411375Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-29T12:47:50.9411836Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (5.27s)
```

- 2026-09-30 PASS 16 seconds
- 2026-10-01 PASS 19 seconds
- 2026-10-02 PASS 39 seconds

## QA Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-27 00:51](#error-2026-09-27t0051200000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6ab8683389346739c52a651d/alertConfigs | qa | 6.01s
[2026-09-29 06:34](#error-2026-09-29t0634350000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6abb5bd056981a918cd60774/alertConfigs | qa | 4.02s
[2026-09-29 10:43](#error-2026-09-29t1043370000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6abb962456981a918cef6a03/alertConfigs | qa | 4.05s
[2026-09-29 11:22](#error-2026-09-29t1122100000) | NOTIFICATION_INTERVAL_OUT_OF_RANGE /api/atlas/v2/groups/6abb9f2c56981a918cf2ceef/alertConfigs | qa | 4.07s

### Timeline
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
- 2026-09-05: MISSING
- 2026-09-06 PASS 15 seconds
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 28 seconds
- 2026-09-14: MISSING
- 2026-09-15: MISSING
- 2026-09-16 PASS 37 seconds
- 2026-09-17: MISSING
- 2026-09-18: MISSING
- 2026-09-19: MISSING
- 2026-09-20 PASS 40 seconds
- 2026-09-21: MISSING
- 2026-09-22: MISSING
- 2026-09-23: MISSING
- 2026-09-24: MISSING
- 2026-09-25: MISSING
- 2026-09-26: MISSING
- 2026-09-27

### Error 2026-09-27T00:51:20+00:00
```
2026-09-27T00:51:20.3319382Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-27T00:51:20.3372003Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-27T00:51:20.3462141Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-27T00:51:20.3463075Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-27T00:51:20.3543241Z         
2026-09-27T00:51:20.3544320Z         Error: error creating Alert Configuration information: %s
2026-09-27T00:51:20.3545719Z         
2026-09-27T00:51:20.3546440Z           with mongodbatlas_alert_configuration.test,
2026-09-27T00:51:20.3547769Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-27T00:51:20.3548901Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-27T00:51:20.3549461Z         
2026-09-27T00:51:20.3550362Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6ab8683389346739c52a651d/alertConfigs
2026-09-27T00:51:20.3551569Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-27T00:51:20.3552686Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-27T00:51:20.3553769Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-27T00:51:20.3554469Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (6.13s)
```

- 2026-09-28: MISSING
- 2026-09-29
  - FAIL 4 seconds

### Error 2026-09-29T06:34:35+00:00
```
2026-09-29T06:34:35.5387549Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T06:34:35.7207538Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T06:34:36.2349993Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T06:34:36.2595614Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-29T06:34:36.2805277Z         
2026-09-29T06:34:36.3006926Z         Error: error creating Alert Configuration information: %s
2026-09-29T06:34:36.3094212Z         
2026-09-29T06:34:36.3207774Z           with mongodbatlas_alert_configuration.test,
2026-09-29T06:34:36.3332634Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-29T06:34:36.3492489Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-29T06:34:36.3575951Z         
2026-09-29T06:34:36.3622513Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6abb5bd056981a918cd60774/alertConfigs
2026-09-29T06:34:36.3726814Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-29T06:34:36.3827425Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-29T06:34:36.3887611Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-29T06:34:36.3982130Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (4.16s)
```

  - FAIL 4 seconds

### Error 2026-09-29T10:43:37+00:00
```
2026-09-29T10:43:37.7449991Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T10:43:37.7503275Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T10:43:37.7604909Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T10:43:37.7605894Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-29T10:43:37.7606800Z         
2026-09-29T10:43:37.7607492Z         Error: error creating Alert Configuration information: %s
2026-09-29T10:43:37.7612234Z         
2026-09-29T10:43:37.7612906Z           with mongodbatlas_alert_configuration.test,
2026-09-29T10:43:37.7614201Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-29T10:43:37.7615839Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-29T10:43:37.7619650Z         
2026-09-29T10:43:37.7620541Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6abb962456981a918cef6a03/alertConfigs
2026-09-29T10:43:37.7621657Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-29T10:43:37.7622679Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-29T10:43:37.7623695Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-29T10:43:37.7624442Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (4.51s)
```

  - FAIL 4 seconds

### Error 2026-09-29T11:22:10+00:00
```
2026-09-29T11:22:10.1504941Z === RUN   TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T11:22:10.1749541Z === CONT  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T11:22:10.1800986Z === NAME  TestAccConfigRSAlertConfiguration_addNotification
2026-09-29T11:22:10.1801914Z     resource_test.go:381: Step 1/2 error: Error running apply: exit status 1
2026-09-29T11:22:10.1802759Z         
2026-09-29T11:22:10.1803425Z         Error: error creating Alert Configuration information: %s
2026-09-29T11:22:10.1804154Z         
2026-09-29T11:22:10.1804890Z           with mongodbatlas_alert_configuration.test,
2026-09-29T11:22:10.1806006Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_alert_configuration" "test":
2026-09-29T11:22:10.1807058Z           12: 		resource "mongodbatlas_alert_configuration" "test" {
2026-09-29T11:22:10.1807639Z         
2026-09-29T11:22:10.1808464Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6abb9f2c56981a918cf2ceef/alertConfigs
2026-09-29T11:22:10.1809793Z         POST: HTTP 400 Bad Request (Error code: "NOTIFICATION_INTERVAL_OUT_OF_RANGE")
2026-09-29T11:22:10.1810832Z         Detail: Notifications must have an internal of at least 5 minutes. Reason:
2026-09-29T11:22:10.1811774Z         Bad Request. Params: [], BadRequestDetail: 
2026-09-29T11:22:10.1812609Z --- FAIL: TestAccConfigRSAlertConfiguration_addNotification (4.68s)
```

- 2026-09-30: MISSING
- 2026-10-01: MISSING
- 2026-10-02: MISSING
