# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 42 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 26) FAIL(x 16)
Success rate: 61.90%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### FAIL 9 seconds
```
2025-05-28T00:52:40.8887045Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-28T00:52:40.8892222Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-28T00:52:40.8952688Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-28T00:52:40.8954258Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T00:52:40.8955379Z         
2025-05-28T00:52:40.8959865Z         Error: error disabling the Backup Compliance Policy: 68365ad2cbc2304eec2b4dc8: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68365ad2cbc2304eec2b4dc8/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-28T00:52:40.8963034Z         
2025-05-28T00:52:40.8963759Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.02s)
```
#### PASS 8 seconds
```
2025-05-28T07:14:41.0678544Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-28T07:14:41.0684325Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-28T07:14:41.0701218Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.72s)
```
#### PASS 12 seconds
```
2025-05-28T08:50:34.3444590Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-28T08:50:34.3451156Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-28T08:50:34.3455326Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (12.81s)
```
### 2025-05-29
#### FAIL 10 seconds
```
2025-05-29T00:50:36.3775693Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-29T00:50:36.3778314Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-29T00:50:36.3796056Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-29T00:50:36.3796972Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-29T00:50:36.3797591Z         
2025-05-29T00:50:36.3799958Z         Error: error disabling the Backup Compliance Policy: 6837ac4aa548243915a5ca56: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6837ac4aa548243915a5ca56/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-29T00:50:36.3801604Z         
2025-05-29T00:50:36.3802153Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (10.40s)
```
#### PASS 8 seconds
```
2025-05-29T07:13:55.4208714Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-29T07:13:55.4214171Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-29T07:13:55.4218049Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.44s)
```
### 2025-05-30
#### PASS 12 seconds
```
2025-05-30T01:03:57.3817999Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-30T01:03:57.3822186Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-30T01:03:57.3828891Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (12.04s)
```
### 2025-05-31
#### PASS 10 seconds
```
2025-05-31T00:49:24.9667357Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-31T00:49:24.9671399Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-31T00:49:24.9674283Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (10.09s)
```
### 2025-06-01
#### FAIL 7 seconds
```
2025-06-01T00:53:38.9729935Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T00:53:38.9734515Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T00:53:38.9761797Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T00:53:38.9763643Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T00:53:38.9764761Z         
2025-06-01T00:53:38.9769180Z         Error: error disabling the Backup Compliance Policy: 683ba1972ebc1806778a04e3: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683ba1972ebc1806778a04e3/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-01T00:53:38.9772160Z         
2025-06-01T00:53:38.9773077Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.51s)
```
#### PASS 7 seconds
```
2025-06-01T05:02:18.2237033Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T05:02:18.2241356Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T05:02:18.2246950Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.91s)
```
#### PASS 9 seconds
```
2025-06-01T09:10:19.9858850Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T09:10:19.9862171Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T09:10:19.9865056Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.67s)
```
#### FAIL 9 seconds
```
2025-06-01T13:20:15.0769945Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T13:20:15.0773977Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T13:20:15.0837383Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T13:20:15.0839085Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T13:20:15.0840258Z         
2025-06-01T13:20:15.0844908Z         Error: error disabling the Backup Compliance Policy: 683c50ba7bf9cf70212d2059: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683c50ba7bf9cf70212d2059/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-01T13:20:15.0848034Z         
2025-06-01T13:20:15.0848775Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.84s)
```
#### FAIL 7 seconds
```
2025-06-01T17:31:35.0707515Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T17:31:35.0710272Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T17:31:35.0726830Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T17:31:35.0727840Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T17:31:35.0728486Z         
2025-06-01T17:31:35.0730891Z         Error: error disabling the Backup Compliance Policy: 683c8b247bf9cf70212d90cf: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683c8b247bf9cf70212d90cf/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-01T17:31:35.0732922Z         
2025-06-01T17:31:35.0733362Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.60s)
```
#### FAIL 7 seconds
```
2025-06-01T21:37:34.1515418Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T21:37:34.1520917Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T21:37:34.1545929Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-01T21:37:34.1547585Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T21:37:34.1548660Z         
2025-06-01T21:37:34.1553158Z         Error: error disabling the Backup Compliance Policy: 683cc558cc8f0935c7c35d14: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cc558cc8f0935c7c35d14/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-01T21:37:34.1556095Z         
2025-06-01T21:37:34.1556986Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.68s)
```
### 2025-06-02
#### FAIL 9 seconds
```
2025-06-02T00:51:45.0088522Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T00:51:45.0093358Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T00:51:45.0123852Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T00:51:45.0125368Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-02T00:51:45.0126377Z         
2025-06-02T00:51:45.0130420Z         Error: error disabling the Backup Compliance Policy: 683cf2abcc8f0935c7c3ba93: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cf2abcc8f0935c7c3ba93/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-02T00:51:45.0133546Z         
2025-06-02T00:51:45.0134429Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.97s)
```
#### FAIL 8 seconds
```
2025-06-02T01:47:00.9615942Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T01:47:00.9621119Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T01:47:00.9647118Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T01:47:00.9648851Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-02T01:47:00.9649942Z         
2025-06-02T01:47:00.9654199Z         Error: error disabling the Backup Compliance Policy: 683cffc4cc8f0935c7c403b2: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683cffc4cc8f0935c7c403b2/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-02T01:47:00.9657532Z         
2025-06-02T01:47:00.9658266Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.52s)
```
#### PASS 9 seconds
```
2025-06-02T06:02:43.0472369Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T06:02:43.0475428Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-02T06:02:43.0478633Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.61s)
```
### 2025-06-03
#### FAIL 7 seconds
```
2025-06-03T00:50:42.2637078Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-03T00:50:42.2639743Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-03T00:50:42.2656149Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-03T00:50:42.2657112Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-03T00:50:42.2657735Z         
2025-06-03T00:50:42.2660218Z         Error: error disabling the Backup Compliance Policy: 683e43f325aee225e55bd786: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683e43f325aee225e55bd786/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-03T00:50:42.2661998Z         
2025-06-03T00:50:42.2662425Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.75s)
```
### 2025-06-04
#### FAIL 12 seconds
```
2025-06-04T00:42:51.7721499Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-04T00:42:51.7725276Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-04T00:42:51.7743361Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-04T00:42:51.7744392Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-04T00:42:51.7745047Z         
2025-06-04T00:42:51.7747425Z         Error: error disabling the Backup Compliance Policy: 683f93574fa12629039cd008: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683f93574fa12629039cd008/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-04T00:42:51.7749275Z         
2025-06-04T00:42:51.7749780Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (12.82s)
```
### 2025-06-05
#### FAIL 2 seconds
```
2025-06-05T00:28:56.4034638Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-05T00:28:56.4040265Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-05T00:28:56.4064340Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-05T00:28:56.4065856Z     resource_backup_compliance_policy_test.go:127: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:28:56.4066853Z         
2025-06-05T00:28:56.4067762Z         Error: error creating project: test-acc-tf-p-7264179943635142808
2025-06-05T00:28:56.4096047Z         
2025-06-05T00:28:56.4096777Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4098080Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4099327Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4100217Z         
2025-06-05T00:28:56.4101226Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4102568Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4103994Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4105045Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (2.03s)
```
### 2025-06-06
#### PASS 10 seconds
```
2025-06-06T00:42:35.3564495Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-06T00:42:35.3568968Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-06T00:42:35.3574712Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (10.84s)
```
### 2025-06-07
#### PASS 7 seconds
```
2025-06-07T00:43:00.9850992Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-07T00:43:00.9856521Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-07T00:43:00.9859873Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.92s)
```
### 2025-06-08
#### PASS 10 seconds
```
2025-06-08T00:44:36.9779049Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-08T00:44:36.9782524Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-08T00:44:36.9784734Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (10.50s)
```
### 2025-06-09
#### FAIL 7 seconds
```
2025-06-09T00:42:04.3353835Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-09T00:42:04.3357340Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-09T00:42:04.3373729Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-09T00:42:04.3374730Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-09T00:42:04.3375370Z         
2025-06-09T00:42:04.3378378Z         Error: error disabling the Backup Compliance Policy: 68462b3de21315547b3604d3: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68462b3de21315547b3604d3/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-09T00:42:04.3380230Z         
2025-06-09T00:42:04.3380662Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.68s)
```
### 2025-06-10
#### FAIL 8 seconds
```
2025-06-10T00:58:59.0451366Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-10T00:58:59.0455185Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-10T00:58:59.0485796Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-10T00:58:59.0486714Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-10T00:58:59.0487326Z         
2025-06-10T00:58:59.0489890Z         Error: error disabling the Backup Compliance Policy: 68477e58a888514df22a686c: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68477e58a888514df22a686c/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-10T00:58:59.0491913Z         
2025-06-10T00:58:59.0492328Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.00s)
```
### 2025-06-11
#### FAIL 9 seconds
```
2025-06-11T00:41:20.9138135Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-11T00:41:20.9141722Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-11T00:41:20.9169225Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-11T00:41:20.9170943Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-11T00:41:20.9172071Z         
2025-06-11T00:41:20.9176538Z         Error: error disabling the Backup Compliance Policy: 6848cdbd69b57d1e7dbaf496: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6848cdbd69b57d1e7dbaf496/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-11T00:41:20.9179895Z         
2025-06-11T00:41:20.9180810Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.78s)
```
#### PASS 12 seconds
```
2025-06-11T07:50:12.5136691Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-11T07:50:12.5139017Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-11T07:50:12.5143301Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (12.34s)
```
### 2025-06-12
#### PASS 8 seconds
```
2025-06-12T00:41:54.7891813Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-12T00:41:54.7895546Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-12T00:41:54.7925656Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.21s)
```
#### FAIL 7 seconds
```
2025-06-12T09:57:04.1945334Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-12T09:57:04.1947175Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-12T09:57:04.1968536Z   
2025-06-12T09:57:04.1969703Z     resource_backup_compliance_policy_test.go:127: Step 2/2 error: Error running apply: exit status 1
2025-06-12T09:57:04.1970642Z         
2025-06-12T09:57:04.1975096Z         Error: error updating a Backup Compliance Policy: 684aa469f4a8af4ba42d7379: https://cloud-qa.mongodb.com/api/atlas/v2/groups/684aa469f4a8af4ba42d7379/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-12T09:57:04.1977193Z         
2025-06-12T09:57:04.1977717Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2025-06-12T09:57:04.1978607Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2025-06-12T09:57:04.1979469Z           24: 	resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2025-06-12T09:57:04.1979941Z         
2025-06-12T09:57:04.1993499Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-12T09:57:04.1994003Z         
2025-06-12T09:57:04.1996547Z         Error: error disabling the Backup Compliance Policy: 684aa469f4a8af4ba42d7379: https://cloud-qa.mongodb.com/api/atlas/v2/groups/684aa469f4a8af4ba42d7379/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-12T09:57:04.1998186Z         
2025-06-12T09:57:04.1998579Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.06s)
```
### 2025-06-13
#### FAIL 7 seconds
```
2025-06-13T00:41:41.3003817Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-13T00:41:41.3006852Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-13T00:41:41.3055187Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-13T00:41:41.3056338Z     resource_backup_compliance_policy_test.go:127: Step 2/2 error: Error running apply: exit status 1
2025-06-13T00:41:41.3057356Z         
2025-06-13T00:41:41.3060178Z         Error: error updating a Backup Compliance Policy: 684b70b0a4aae01f9b73baed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684b70b0a4aae01f9b73baed/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-13T00:41:41.3061809Z         
2025-06-13T00:41:41.3062337Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2025-06-13T00:41:41.3063256Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2025-06-13T00:41:41.3064122Z           24: 	resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2025-06-13T00:41:41.3064583Z         
2025-06-13T00:41:41.3078086Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-13T00:41:41.3078595Z         
2025-06-13T00:41:41.3080941Z         Error: error disabling the Backup Compliance Policy: 684b70b0a4aae01f9b73baed: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684b70b0a4aae01f9b73baed/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-13T00:41:41.3082573Z         
2025-06-13T00:41:41.3082970Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.90s)
```
### 2025-06-14
#### PASS a minute
```
2025-06-14T00:41:27.5568615Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-14T00:41:27.5573081Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-14T00:41:27.5578828Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (69.49s)
```
### 2025-06-15
#### PASS a minute
```
2025-06-15T00:44:51.3221408Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-15T00:44:51.3224882Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-15T00:44:51.3227889Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (66.51s)
```
### 2025-06-16
#### PASS a minute
```
2025-06-16T00:44:39.9212871Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-16T00:44:39.9218127Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-16T00:44:39.9223339Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (75.22s)
```
### 2025-06-17
#### PASS a minute
```
2025-06-17T00:40:17.4437315Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-17T00:40:17.4440395Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-17T00:40:17.4442753Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (67.13s)
```
### 2025-06-18
#### PASS a minute
```
2025-06-18T00:41:21.0757253Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-18T00:41:21.0759882Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-18T00:41:21.0762975Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (67.15s)
```
### 2025-06-19
#### PASS a minute
```
2025-06-19T00:42:53.3976506Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-19T00:42:53.3982194Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-19T00:42:53.3986641Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (71.11s)
```
### 2025-06-20
#### PASS a minute
```
2025-06-20T00:43:25.4039787Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-20T00:43:25.4044526Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-20T00:43:25.4048397Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (67.26s)
```
### 2025-06-21
#### PASS a minute
```
2025-06-21T00:43:03.0723928Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-21T00:43:03.0729930Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-21T00:43:03.0734907Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (73.28s)
```
### 2025-06-22
#### PASS a minute
```
2025-06-22T00:44:34.6646151Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-22T00:44:34.6648317Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-22T00:44:34.6714337Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (81.78s)
```
### 2025-06-23
#### PASS a minute
```
2025-06-23T00:43:16.3455029Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-23T00:43:16.3457681Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-23T00:43:16.3461914Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (67.87s)
```
### 2025-06-24
#### PASS a minute
```
2025-06-24T00:41:14.0046458Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-24T00:41:14.0051324Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-24T00:41:14.0056430Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (69.06s)
```
### 2025-06-25
#### PASS a minute
```
2025-06-25T00:41:42.6370923Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-25T00:41:42.6375225Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-25T00:41:42.6381122Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (66.89s)
```
### 2025-06-26
#### PASS a minute
```
2025-06-26T00:41:37.1534508Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-26T00:41:37.1538081Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-26T00:41:37.1543633Z --- PASS: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (68.20s)
```