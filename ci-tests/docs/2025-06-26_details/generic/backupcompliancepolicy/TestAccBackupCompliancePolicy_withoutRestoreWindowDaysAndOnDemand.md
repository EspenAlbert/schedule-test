# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 41 TestRuns in dev, qa from 2025-05-28 to 2025-06-26 from master branch: 1 unique tests, PASS(x 36) FAIL(x 5)
Success rate: 87.80%

## Timeline
2025-05-27: MISSING
### 2025-05-28
#### FAIL 5 seconds
```
2025-05-28T00:52:40.8884880Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-28T00:52:40.8893250Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-28T00:52:40.8916577Z   
2025-05-28T00:52:40.8918004Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-28T00:52:40.8919138Z         
2025-05-28T00:52:40.8923778Z         Error: error disabling the Backup Compliance Policy: 68365ad21e6d7241ae6f482a: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68365ad21e6d7241ae6f482a/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-28T00:52:40.8926755Z         
2025-05-28T00:52:40.8927574Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.41s)
```
#### PASS 5 seconds
```
2025-05-28T07:14:41.0676668Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-28T07:14:41.0685628Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-28T07:14:41.0698314Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.31s)
```
#### PASS 6 seconds
```
2025-05-28T08:50:34.3441725Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-28T08:50:34.3448337Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-28T08:50:34.3452268Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.73s)
```
### 2025-05-29
#### PASS 6 seconds
```
2025-05-29T00:50:36.3773757Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-29T00:50:36.3779190Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-29T00:50:36.3781179Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.67s)
```
#### PASS 6 seconds
```
2025-05-29T07:13:55.4206326Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-29T07:13:55.4215267Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-29T07:13:55.4216787Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.97s)
```
### 2025-05-30
#### PASS 8 seconds
```
2025-05-30T01:03:57.3815797Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-30T01:03:57.3823973Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-30T01:03:57.3826026Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (8.09s)
```
### 2025-05-31
#### PASS 9 seconds
```
2025-05-31T00:49:24.9665804Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-31T00:49:24.9672115Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-31T00:49:24.9673464Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (9.42s)
```
### 2025-06-01
#### PASS 5 seconds
```
2025-06-01T00:53:38.9727796Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T00:53:38.9736256Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T00:53:38.9737438Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.44s)
```
#### PASS 6 seconds
```
2025-06-01T05:02:18.2234692Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T05:02:18.2242471Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T05:02:18.2245033Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.38s)
```
#### PASS 5 seconds
```
2025-06-01T09:10:19.9857313Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T09:10:19.9862762Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T09:10:19.9863438Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.28s)
```
#### FAIL 6 seconds
```
2025-06-01T13:20:15.0767737Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T13:20:15.0775025Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T13:20:15.0801169Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T13:20:15.0802995Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-01T13:20:15.0804147Z         
2025-06-01T13:20:15.0808625Z         Error: error disabling the Backup Compliance Policy: 683c50ba7bf9cf70212d205a: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683c50ba7bf9cf70212d205a/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-01T13:20:15.0811872Z         
2025-06-01T13:20:15.0812700Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.48s)
```
#### PASS 6 seconds
```
2025-06-01T17:31:35.0705425Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T17:31:35.0711883Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T17:31:35.0712807Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.09s)
```
#### PASS 5 seconds
```
2025-06-01T21:37:34.1513315Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T21:37:34.1521902Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-01T21:37:34.1523050Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.05s)
```
### 2025-06-02
#### PASS 7 seconds
```
2025-06-02T00:51:45.0085858Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-02T00:51:45.0094450Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-02T00:51:45.0096598Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (7.32s)
```
#### PASS 6 seconds
```
2025-06-02T01:47:00.9613566Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-02T01:47:00.9622111Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-02T01:47:00.9623268Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.44s)
```
#### PASS 6 seconds
```
2025-06-02T06:02:43.0471040Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-02T06:02:43.0476518Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-02T06:02:43.0477293Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.55s)
```
### 2025-06-03
#### PASS 5 seconds
```
2025-06-03T00:50:42.2635687Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-03T00:50:42.2640378Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-03T00:50:42.2642033Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.12s)
```
### 2025-06-04
#### PASS 8 seconds
```
2025-06-04T00:42:51.7719383Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-04T00:42:51.7726121Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-04T00:42:51.7727700Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (8.65s)
```
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:28:56.4032370Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-05T00:28:56.4041342Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-05T00:28:56.4063667Z   
2025-06-05T00:28:56.4263301Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-05T00:28:56.4264808Z     resource_backup_compliance_policy_test.go:103: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:28:56.4265798Z         
2025-06-05T00:28:56.4266696Z         Error: error creating project: test-acc-tf-p-1011435828253717179
2025-06-05T00:28:56.4267490Z         
2025-06-05T00:28:56.4268177Z           with mongodbatlas_project.test,
2025-06-05T00:28:56.4269457Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-05T00:28:56.4270796Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-05T00:28:56.4271481Z         
2025-06-05T00:28:56.4272502Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2025-06-05T00:28:56.4273529Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2025-06-05T00:28:56.4274214Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:28:56.4274840Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.05s)
```
### 2025-06-06
#### PASS 6 seconds
```
2025-06-06T00:42:35.3562365Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-06T00:42:35.3570019Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-06T00:42:35.3571920Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.98s)
```
### 2025-06-07
#### PASS 7 seconds
```
2025-06-07T00:43:00.9848804Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-07T00:43:00.9857577Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-07T00:43:00.9858741Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (7.39s)
```
### 2025-06-08
#### PASS 6 seconds
```
2025-06-08T00:44:36.9777608Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-08T00:44:36.9781539Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-08T00:44:36.9783141Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.98s)
```
### 2025-06-09
#### PASS 6 seconds
```
2025-06-09T00:42:04.3351714Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-09T00:42:04.3358380Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-09T00:42:04.3360010Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.12s)
```
### 2025-06-10
#### PASS 6 seconds
```
2025-06-10T00:58:59.0449995Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-10T00:58:59.0453654Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-10T00:58:59.0455858Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.28s)
```
### 2025-06-11
#### PASS 6 seconds
```
2025-06-11T00:41:20.9135771Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-11T00:41:20.9142747Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-11T00:41:20.9145407Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.79s)
```
#### PASS 8 seconds
```
2025-06-11T07:50:12.5135246Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-11T07:50:12.5140176Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-11T07:50:12.5141441Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (8.06s)
```
### 2025-06-12
#### FAIL 5 seconds
```
2025-06-12T00:41:54.7889604Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-12T00:41:54.7897534Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-12T00:41:54.7916899Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-12T00:41:54.7918341Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-12T00:41:54.7919773Z         
2025-06-12T00:41:54.7922144Z         Error: error disabling the Backup Compliance Policy: 684a1f285c025329ee514d04: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684a1f285c025329ee514d04/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-12T00:41:54.7923768Z         
2025-06-12T00:41:54.7924214Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.31s)
```
### 2025-06-13
#### FAIL 6 seconds
```
2025-06-13T00:41:41.3002335Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-13T00:41:41.3007476Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-13T00:41:41.3032377Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-13T00:41:41.3033851Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-13T00:41:41.3035118Z         
2025-06-13T00:41:41.3037518Z         Error: error disabling the Backup Compliance Policy: 684b70b0a4aae01f9b73baf0: https://cloud-dev.mongodb.com/api/atlas/v2/groups/684b70b0a4aae01f9b73baf0/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-06-13T00:41:41.3039157Z         
2025-06-13T00:41:41.3039611Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.06s)
```
### 2025-06-14
#### PASS 36 seconds
```
2025-06-14T00:41:27.5566689Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-14T00:41:27.5574822Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-14T00:41:27.5576019Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (36.50s)
```
### 2025-06-15
#### PASS 35 seconds
```
2025-06-15T00:44:51.3219182Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-15T00:44:51.3225610Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-15T00:44:51.3226447Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (35.81s)
```
### 2025-06-16
#### PASS 37 seconds
```
2025-06-16T00:44:39.9210675Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-16T00:44:39.9219216Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-16T00:44:39.9220488Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (37.89s)
```
### 2025-06-17
#### PASS 34 seconds
```
2025-06-17T00:40:17.4436077Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-17T00:40:17.4440958Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-17T00:40:17.4441628Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (34.52s)
```
### 2025-06-18
#### PASS 34 seconds
```
2025-06-18T00:41:21.0755861Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-18T00:41:21.0761032Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-18T00:41:21.0761774Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (34.68s)
```
### 2025-06-19
#### PASS 36 seconds
```
2025-06-19T00:42:53.3974168Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-19T00:42:53.3983181Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-19T00:42:53.3984585Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (36.58s)
```
### 2025-06-20
#### PASS 37 seconds
```
2025-06-20T00:43:25.4037784Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-20T00:43:25.4045474Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-20T00:43:25.4046573Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (37.12s)
```
### 2025-06-21
#### PASS 38 seconds
```
2025-06-21T00:43:03.0720257Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-21T00:43:03.0731013Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-21T00:43:03.0733209Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (38.96s)
```
### 2025-06-22
#### PASS 50 seconds
```
2025-06-22T00:44:34.6644815Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-22T00:44:34.6649397Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-22T00:44:34.6713696Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (50.02s)
```
### 2025-06-23
#### PASS 35 seconds
```
2025-06-23T00:43:16.3453841Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-23T00:43:16.3458363Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-23T00:43:16.3460084Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (35.45s)
```
### 2025-06-24
#### PASS 34 seconds
```
2025-06-24T00:41:14.0044393Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-24T00:41:14.0052573Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-24T00:41:14.0053741Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (34.86s)
```
### 2025-06-25
#### PASS 36 seconds
```
2025-06-25T00:41:42.6368307Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-25T00:41:42.6377708Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-25T00:41:42.6379091Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (36.34s)
```
### 2025-06-26
#### PASS 35 seconds
```
2025-06-26T00:41:37.1532434Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-26T00:41:37.1539066Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-06-26T00:41:37.1541742Z --- PASS: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (35.65s)
```