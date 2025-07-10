# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_UpdateSetsAllAttributes Test Details
# Found 117 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 83) FAIL(x 34)
Success rate: 70.94%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-04-21 00:41](#error-2025-04-21t0041340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6805914e71469b0806034e7b/backupCompliancePolicy | dev | flaky_500 | 9.02s
[2025-04-22 00:41](#error-2025-04-22t0041480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6806e251ec672b69fde1481a/backupCompliancePolicy | dev | flaky_500 | 8.09s
[2025-04-23 00:40](#error-2025-04-23t0040410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/680833d46526814a2c451cc1/backupCompliancePolicy | dev | flaky_500 | 9.04s
[2025-04-24 00:39](#error-2025-04-24t0039270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68098558be38426bf03a311a/backupCompliancePolicy | dev | flaky_500 | 10.03s
[2025-04-27 00:44](#error-2025-04-27t0044150000) | UNEXPECTED_ERROR /api/atlas/v2/groups/680d7a627d8b396a09993734/backupCompliancePolicy | qa | flaky_500 | 8.09s
[2025-04-28 00:41](#error-2025-04-28t0041490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/680ecbbe1ad7050ec5b1ebe3/backupCompliancePolicy | dev | flaky_500 | 9.04s
[2025-05-01 05:03](#error-2025-05-01t0503270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6812fdedf7db2d257066e7bd/backupCompliancePolicy | dev | flaky_500 | 6.09s
[2025-05-02 00:42](#error-2025-05-02t0042420000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6814117c826ec13971a5ffea/backupCompliancePolicy | dev | flaky_500 | 10.03s
[2025-05-06 00:41](#error-2025-05-06t0041410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6819579bcc78d6370f83e786/backupCompliancePolicy | dev | flaky_500 | 9.03s
[2025-05-07 00:44](#error-2025-05-07t0044050000) | UNEXPECTED_ERROR /api/atlas/v2/groups/681aa915c5c2f34a0f59a372/backupCompliancePolicy | dev | flaky_500 | 7.08s
[2025-05-08 00:45](#error-2025-05-08t0045050000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/681bfa810cda0e3169ea25e3/backupCompliancePolicy | dev |  | 7.07s
[2025-05-09 00:42](#error-2025-05-09t0042260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/681d4c164ce91a25814b3d0c/backupCompliancePolicy | dev | flaky_500 | 9.06s
[2025-05-11 00:29](#error-2025-05-11t0029530000) |  | qa |  | 1.03s
[2025-05-13 07:30](#error-2025-05-13t0730570000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6822f1df964f7b3a2a03e560/backupCompliancePolicy | dev |  | 7.02s
[2025-05-27 00:42](#error-2025-05-27t0042040000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683507082526216c4da829f9/backupCompliancePolicy | dev |  | 8.04s
[2025-05-27 07:35](#error-2025-05-27t0735120000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6835683e436c462da7593669/backupCompliancePolicy | dev |  | 8.05s
[2025-05-28 00:52](#error-2025-05-28t0052400000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68365ad2cbc2304eec2b4dc8/backupCompliancePolicy | dev |  | 9.00s
[2025-05-29 00:50](#error-2025-05-29t0050360000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6837ac4aa548243915a5ca56/backupCompliancePolicy | dev |  | 10.04s
[2025-06-01 00:53](#error-2025-06-01t0053380000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683ba1972ebc1806778a04e3/backupCompliancePolicy | dev |  | 7.05s
[2025-06-01 13:20](#error-2025-06-01t1320150000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683c50ba7bf9cf70212d2059/backupCompliancePolicy | dev |  | 9.08s
[2025-06-01 17:31](#error-2025-06-01t1731350000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683c8b247bf9cf70212d90cf/backupCompliancePolicy | dev |  | 7.06s
[2025-06-01 21:37](#error-2025-06-01t2137340000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683cc558cc8f0935c7c35d14/backupCompliancePolicy | dev |  | 7.07s
[2025-06-02 00:51](#error-2025-06-02t0051450000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683cf2abcc8f0935c7c3ba93/backupCompliancePolicy | dev |  | 9.10s
[2025-06-02 01:47](#error-2025-06-02t0147000000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683cffc4cc8f0935c7c403b2/backupCompliancePolicy | dev |  | 8.05s
[2025-06-03 00:50](#error-2025-06-03t0050420000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683e43f325aee225e55bd786/backupCompliancePolicy | dev |  | 7.08s
[2025-06-04 00:42](#error-2025-06-04t0042510000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/683f93574fa12629039cd008/backupCompliancePolicy | dev |  | 12.08s
[2025-06-05 00:28](#error-2025-06-05t0028560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 2.00s
[2025-06-09 00:42](#error-2025-06-09t0042040000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68462b3de21315547b3604d3/backupCompliancePolicy | dev |  | 7.07s
[2025-06-10 00:58](#error-2025-06-10t0058590000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/68477e58a888514df22a686c/backupCompliancePolicy | dev |  | 8.00s
[2025-06-11 00:41](#error-2025-06-11t0041200000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/6848cdbd69b57d1e7dbaf496/backupCompliancePolicy | dev |  | 9.08s
[2025-06-12 09:57](#error-2025-06-12t0957040000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/684aa469f4a8af4ba42d7379/backupCompliancePolicy | qa |  | 7.01s
[2025-06-13 00:41](#error-2025-06-13t0041410000) | CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION /api/atlas/v2/groups/684b70b0a4aae01f9b73baed/backupCompliancePolicy | dev |  | 7.09s
[2025-06-29 00:46](#error-2025-06-29t0046260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898856291349dce6cc47/limits | qa | flaky_500 | 68.03s
[2025-07-06 00:46](#error-2025-07-06t0046500000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6869c402690ae45e168bcdfe/limits | qa | flaky_500 | 33.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 8 seconds
- 2025-04-13 PASS 11 seconds
- 2025-04-14 PASS 7 seconds
- 2025-04-15 PASS 11 seconds
- 2025-04-16
  - PASS 8 seconds
  - PASS 12 seconds
- 2025-04-17 PASS 11 seconds
- 2025-04-18 PASS 9 seconds
- 2025-04-19 PASS 13 seconds
- 2025-04-20 PASS 8 seconds
- 2025-04-21

### Error 2025-04-21T00:41:34+00:00
```
2025-04-21T00:41:34.1106321Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-21T00:41:34.1109851Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-21T00:41:34.1124110Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-21T00:41:34.1125115Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-21T00:41:34.1125738Z         
2025-04-21T00:41:34.1127674Z         Error: error disabling the Backup Compliance Policy: 6805914e71469b0806034e7b: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6805914e71469b0806034e7b/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-21T00:41:34.1129033Z         
2025-04-21T00:41:34.1129438Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.19s)
```

- 2025-04-22

### Error 2025-04-22T00:41:48+00:00
```
2025-04-22T00:41:48.3771224Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-22T00:41:48.3774660Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-22T00:41:48.3800986Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-22T00:41:48.3802832Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-22T00:41:48.3803892Z         
2025-04-22T00:41:48.3807492Z         Error: error disabling the Backup Compliance Policy: 6806e251ec672b69fde1481a: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6806e251ec672b69fde1481a/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-22T00:41:48.3809835Z         
2025-04-22T00:41:48.3810543Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.91s)
```

- 2025-04-23

### Error 2025-04-23T00:40:41+00:00
```
2025-04-23T00:40:41.5752254Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-23T00:40:41.5755950Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-23T00:40:41.5771746Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-23T00:40:41.5772727Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-23T00:40:41.5773345Z         
2025-04-23T00:40:41.5775303Z         Error: error disabling the Backup Compliance Policy: 680833d46526814a2c451cc1: https://cloud-dev.mongodb.com/api/atlas/v2/groups/680833d46526814a2c451cc1/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-23T00:40:41.5776639Z         
2025-04-23T00:40:41.5777062Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.43s)
```

- 2025-04-24

### Error 2025-04-24T00:39:27+00:00
```
2025-04-24T00:39:27.7370164Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-24T00:39:27.7376678Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-24T00:39:27.7398998Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-24T00:39:27.7400684Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-24T00:39:27.7401967Z         
2025-04-24T00:39:27.7405504Z         Error: error disabling the Backup Compliance Policy: 68098558be38426bf03a311a: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68098558be38426bf03a311a/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-24T00:39:27.7407952Z         
2025-04-24T00:39:27.7408655Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (10.29s)
```

- 2025-04-25 PASS 12 seconds
- 2025-04-26 PASS 30 seconds
- 2025-04-27

### Error 2025-04-27T00:44:15+00:00
```
2025-04-27T00:44:15.4763274Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-27T00:44:15.4768858Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-27T00:44:15.4805531Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-27T00:44:15.4806404Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:44:15.4807008Z         
2025-04-27T00:44:15.4808890Z         Error: error disabling the Backup Compliance Policy: 680d7a627d8b396a09993734: https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a627d8b396a09993734/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-27T00:44:15.4811374Z         
2025-04-27T00:44:15.4812095Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.87s)
```

- 2025-04-28

### Error 2025-04-28T00:41:49+00:00
```
2025-04-28T00:41:49.0654998Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-28T00:41:49.0658938Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-28T00:41:49.0683920Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-04-28T00:41:49.0685493Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-28T00:41:49.0686699Z         
2025-04-28T00:41:49.0699289Z         Error: error disabling the Backup Compliance Policy: 680ecbbe1ad7050ec5b1ebe3: https://cloud-dev.mongodb.com/api/atlas/v2/groups/680ecbbe1ad7050ec5b1ebe3/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-28T00:41:49.0701451Z         
2025-04-28T00:41:49.0702222Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.42s)
```

- 2025-04-29 PASS 9 seconds
- 2025-04-30
  - PASS 12 seconds
  - PASS 9 seconds
- 2025-05-01
  - PASS 11 seconds
  - PASS 13 seconds
  - PASS 8 seconds
  - FAIL 6 seconds

### Error 2025-05-01T05:03:27+00:00
```
2025-05-01T05:03:27.1339508Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-01T05:03:27.1342082Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-01T05:03:27.1357013Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-01T05:03:27.1357981Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-01T05:03:27.1358646Z         
2025-05-01T05:03:27.1360604Z         Error: error disabling the Backup Compliance Policy: 6812fdedf7db2d257066e7bd: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6812fdedf7db2d257066e7bd/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-01T05:03:27.1362028Z         
2025-05-01T05:03:27.1362490Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (6.94s)
```

  - PASS 10 seconds
  - PASS 12 seconds
  - PASS 8 seconds
- 2025-05-02

### Error 2025-05-02T00:42:42+00:00
```
2025-05-02T00:42:42.4105027Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-02T00:42:42.4109988Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-02T00:42:42.4166593Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-02T00:42:42.4168190Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-02T00:42:42.4169344Z         
2025-05-02T00:42:42.4173194Z         Error: error disabling the Backup Compliance Policy: 6814117c826ec13971a5ffea: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6814117c826ec13971a5ffea/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-02T00:42:42.4175759Z         
2025-05-02T00:42:42.4176500Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (10.33s)
```

- 2025-05-03 PASS 9 seconds
- 2025-05-04 PASS 13 seconds
- 2025-05-05 PASS 12 seconds
- 2025-05-06

### Error 2025-05-06T00:41:41+00:00
```
2025-05-06T00:41:41.5083508Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-06T00:41:41.5088061Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-06T00:41:41.5134799Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-06T00:41:41.5135684Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-06T00:41:41.5136289Z         
2025-05-06T00:41:41.5138168Z         Error: error disabling the Backup Compliance Policy: 6819579bcc78d6370f83e786: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6819579bcc78d6370f83e786/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-06T00:41:41.5139490Z         
2025-05-06T00:41:41.5139897Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.34s)
```

- 2025-05-07

### Error 2025-05-07T00:44:05+00:00
```
2025-05-07T00:44:05.5937573Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-07T00:44:05.5939519Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-07T00:44:05.5956216Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-07T00:44:05.5957201Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-07T00:44:05.5957830Z         
2025-05-07T00:44:05.5959789Z         Error: error disabling the Backup Compliance Policy: 681aa915c5c2f34a0f59a372: https://cloud-dev.mongodb.com/api/atlas/v2/groups/681aa915c5c2f34a0f59a372/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-07T00:44:05.5961138Z         
2025-05-07T00:44:05.5961545Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.76s)
```

- 2025-05-08

### Error 2025-05-08T00:45:05+00:00
```
2025-05-08T00:45:05.4098608Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-08T00:45:05.4100514Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-08T00:45:05.4117936Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-08T00:45:05.4118722Z     resource_backup_compliance_policy_test.go:127: Step 2/2 error: Error running apply: exit status 1
2025-05-08T00:45:05.4119240Z         
2025-05-08T00:45:05.4121756Z         Error: error updating a Backup Compliance Policy: 681bfa810cda0e3169ea25e3: https://cloud-dev.mongodb.com/api/atlas/v2/groups/681bfa810cda0e3169ea25e3/backupCompliancePolicy PUT: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-08T00:45:05.4123376Z         
2025-05-08T00:45:05.4123883Z           with mongodbatlas_backup_compliance_policy.backup_policy_res,
2025-05-08T00:45:05.4124784Z           on terraform_plugin_test.tf line 24, in resource "mongodbatlas_backup_compliance_policy" "backup_policy_res":
2025-05-08T00:45:05.4126143Z           24: 	resource "mongodbatlas_backup_compliance_policy" "backup_policy_res" {
2025-05-08T00:45:05.4126609Z         
2025-05-08T00:45:05.4128138Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.70s)
```

- 2025-05-09

### Error 2025-05-09T00:42:26+00:00
```
2025-05-09T00:42:26.6163660Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-09T00:42:26.6167747Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-09T00:42:26.6223713Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-09T00:42:26.6225656Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-09T00:42:26.6226772Z         
2025-05-09T00:42:26.6230290Z         Error: error disabling the Backup Compliance Policy: 681d4c164ce91a25814b3d0c: https://cloud-dev.mongodb.com/api/atlas/v2/groups/681d4c164ce91a25814b3d0c/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-09T00:42:26.6232807Z         
2025-05-09T00:42:26.6233519Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (9.57s)
```

- 2025-05-10 PASS 13 seconds
- 2025-05-11

### Error 2025-05-11T00:29:53+00:00
```
2025-05-11T00:29:53.7316511Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-11T00:29:53.7319278Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-11T00:29:53.7370264Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-11T00:29:53.7371160Z     resource_backup_compliance_policy_test.go:127: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:29:53.7371675Z         
2025-05-11T00:29:53.7372160Z         Error: error creating project: test-acc-tf-p-607798530848721656
2025-05-11T00:29:53.7372584Z         
2025-05-11T00:29:53.7372947Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.7373628Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.7374235Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.7374590Z         
2025-05-11T00:29:53.7375124Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.7375589Z         type
2025-05-11T00:29:53.7382653Z   
2025-05-11T00:29:53.7404438Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (1.27s)
```

- 2025-05-12 PASS 9 seconds
- 2025-05-13
  - PASS 9 seconds
  - FAIL 7 seconds

### Error 2025-05-13T07:30:57+00:00
```
2025-05-13T07:30:57.3582743Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-13T07:30:57.3585961Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-13T07:30:57.3602968Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-13T07:30:57.3604070Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-13T07:30:57.3604815Z         
2025-05-13T07:30:57.3607197Z         Error: error disabling the Backup Compliance Policy: 6822f1df964f7b3a2a03e560: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6822f1df964f7b3a2a03e560/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-13T07:30:57.3608832Z         
2025-05-13T07:30:57.3609391Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (7.22s)
```

- 2025-05-14 PASS 11 seconds
- 2025-05-15 PASS 9 seconds
- 2025-05-16 PASS 10 seconds
- 2025-05-17 PASS 9 seconds
- 2025-05-18 PASS 11 seconds
- 2025-05-19 PASS 7 seconds
- 2025-05-20 PASS 13 seconds
- 2025-05-21 PASS 9 seconds
- 2025-05-22 PASS 11 seconds
- 2025-05-23 PASS 12 seconds
- 2025-05-24 PASS 9 seconds
- 2025-05-25 PASS 8 seconds
- 2025-05-26 PASS 12 seconds
- 2025-05-27
  - FAIL 8 seconds

### Error 2025-05-27T00:42:04+00:00
```
2025-05-27T00:42:04.0580608Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-27T00:42:04.0584207Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-27T00:42:04.0605555Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-27T00:42:04.0606935Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-27T00:42:04.0608344Z         
2025-05-27T00:42:04.0610735Z         Error: error disabling the Backup Compliance Policy: 683507082526216c4da829f9: https://cloud-dev.mongodb.com/api/atlas/v2/groups/683507082526216c4da829f9/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-27T00:42:04.0612367Z         
2025-05-27T00:42:04.0612993Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.44s)
```

  - FAIL 8 seconds

### Error 2025-05-27T07:35:12+00:00
```
2025-05-27T07:35:12.2669809Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-27T07:35:12.2671808Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-27T07:35:12.2690382Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-05-27T07:35:12.2691376Z     resource_backup_compliance_policy_test.go:127: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-27T07:35:12.2691993Z         
2025-05-27T07:35:12.2694399Z         Error: error disabling the Backup Compliance Policy: 6835683e436c462da7593669: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6835683e436c462da7593669/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-27T07:35:12.2696406Z         
2025-05-27T07:35:12.2697104Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (8.54s)
```

- 2025-05-28
  - FAIL 9 seconds

### Error 2025-05-28T00:52:40+00:00
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

  - PASS 8 seconds
  - PASS 12 seconds
- 2025-05-29
  - FAIL 10 seconds

### Error 2025-05-29T00:50:36+00:00
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

  - PASS 8 seconds
- 2025-05-30 PASS 12 seconds
- 2025-05-31 PASS 10 seconds
- 2025-06-01
  - FAIL 7 seconds

### Error 2025-06-01T00:53:38+00:00
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

  - PASS 7 seconds
  - PASS 9 seconds
  - FAIL 9 seconds

### Error 2025-06-01T13:20:15+00:00
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

  - FAIL 7 seconds

### Error 2025-06-01T17:31:35+00:00
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

  - FAIL 7 seconds

### Error 2025-06-01T21:37:34+00:00
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

- 2025-06-02
  - FAIL 9 seconds

### Error 2025-06-02T00:51:45+00:00
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

  - FAIL 8 seconds

### Error 2025-06-02T01:47:00+00:00
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

  - PASS 9 seconds
- 2025-06-03

### Error 2025-06-03T00:50:42+00:00
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

- 2025-06-04

### Error 2025-06-04T00:42:51+00:00
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

- 2025-06-05

### Error 2025-06-05T00:28:56+00:00
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

- 2025-06-06 PASS 10 seconds
- 2025-06-07 PASS 7 seconds
- 2025-06-08 PASS 10 seconds
- 2025-06-09

### Error 2025-06-09T00:42:04+00:00
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

- 2025-06-10

### Error 2025-06-10T00:58:59+00:00
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

- 2025-06-11
  - FAIL 9 seconds

### Error 2025-06-11T00:41:20+00:00
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

  - PASS 12 seconds
- 2025-06-12
  - PASS 8 seconds
  - FAIL 7 seconds

### Error 2025-06-12T09:57:04+00:00
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

- 2025-06-13

### Error 2025-06-13T00:41:41+00:00
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

- 2025-06-14 PASS a minute
- 2025-06-15 PASS a minute
- 2025-06-16 PASS a minute
- 2025-06-17 PASS a minute
- 2025-06-18 PASS a minute
- 2025-06-19 PASS a minute
- 2025-06-20 PASS a minute
- 2025-06-21 PASS a minute
- 2025-06-22 PASS a minute
- 2025-06-23 PASS a minute
- 2025-06-24 PASS a minute
- 2025-06-25 PASS a minute
- 2025-06-26 PASS a minute
- 2025-06-27 PASS a minute
- 2025-06-28 PASS a minute
- 2025-06-29

### Error 2025-06-29T00:46:26+00:00
```
2025-06-29T00:46:26.6042989Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-29T00:46:26.6045313Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-29T00:46:26.6063052Z === NAME  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-06-29T00:46:26.6063911Z     resource_backup_compliance_policy_test.go:128: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:46:26.6064490Z         
2025-06-29T00:46:26.6064948Z         Error: error when getting project properties after create
2025-06-29T00:46:26.6065360Z         
2025-06-29T00:46:26.6065872Z           with mongodbatlas_project.test,
2025-06-29T00:46:26.6066681Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:46:26.6067295Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:46:26.6067661Z         
2025-06-29T00:46:26.6068168Z         error getting project (6860898856291349dce6cc47): error getting project's
2025-06-29T00:46:26.6068686Z         limits (6860898856291349dce6cc47):
2025-06-29T00:46:26.6069330Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898856291349dce6cc47/limits
2025-06-29T00:46:26.6070083Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:46:26.6070738Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:46:26.6071205Z         BadRequestDetail: 
2025-06-29T00:46:26.6084785Z    test_step_number=2 test_name=TestAccBackupCompliancePolicy_update test_terraform_path=/home/runner/work/_temp/b6f91d25-c628-4dbb-93ea-1cc51b6a5768/terraform test_working_directory=/tmp/plugintest2364144248
2025-06-29T00:46:26.6094660Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (68.28s)
```

- 2025-06-30 PASS a minute
- 2025-07-01
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
  - PASS a minute
- 2025-07-02 PASS a minute
- 2025-07-03 PASS a minute
- 2025-07-04 PASS a minute
- 2025-07-05 PASS a minute
- 2025-07-06

### Error 2025-07-06T00:46:50+00:00
```
2025-07-06T00:46:50.0779887Z === RUN   TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-06T00:46:50.0785925Z === CONT  TestAccBackupCompliancePolicy_UpdateSetsAllAttributes
2025-07-06T00:46:50.0811528Z   
2025-07-06T00:46:50.0812856Z     resource_backup_compliance_policy_test.go:128: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:46:50.0813802Z         
2025-07-06T00:46:50.0814588Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0815280Z         
2025-07-06T00:46:50.0815899Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0817089Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0818184Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0819020Z         
2025-07-06T00:46:50.0819952Z         error getting project (6869c402690ae45e168bcdfe): error getting project's
2025-07-06T00:46:50.0820892Z         limits (6869c402690ae45e168bcdfe):
2025-07-06T00:46:50.0822033Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bcdfe/limits
2025-07-06T00:46:50.0823542Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0824715Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0825534Z         BadRequestDetail: 
2025-07-06T00:46:50.0826309Z --- FAIL: TestAccBackupCompliancePolicy_UpdateSetsAllAttributes (33.41s)
```

- 2025-07-07 PASS a minute
- 2025-07-08 PASS a minute
- 2025-07-09 PASS a minute
- 2025-07-10 PASS a minute