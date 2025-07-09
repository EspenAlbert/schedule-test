# generic/backupcompliancepolicy/TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand Test Details
# Found 116 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 101) FAIL(x 15)
Success rate: 87.07%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-04-14 00:40 | dev | 5.05s
2025-04-18 00:40 | dev | 5.05s
2025-04-20 00:45 | qa | 4.06s
2025-04-27 00:44 | qa | 7.01s
2025-05-02 00:42 | dev | 6.03s
2025-05-06 00:41 | dev | 4.09s
2025-05-09 00:42 | dev | 5.05s
2025-05-11 00:29 | qa | 1.02s
2025-05-12 00:42 | dev | 4.05s
2025-05-28 00:52 | dev | 5.04s
2025-06-01 13:20 | dev | 6.05s
2025-06-05 00:28 | dev | 5.00s
2025-06-12 00:41 | dev | 5.03s
2025-06-13 00:41 | dev | 6.01s
2025-07-06 00:46 | qa | 66.03s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
### 2025-04-11
#### PASS 6 seconds
### 2025-04-12
#### PASS 6 seconds
### 2025-04-13
#### PASS 7 seconds
### 2025-04-14
#### FAIL 5 seconds
```
2025-04-14T00:40:13.2120676Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-14T00:40:13.2128300Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-14T00:40:13.2142601Z    test_name=TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand test_terraform_path=/home/runner/work/_temp/1cc304f3-4c62-46fa-aaa5-11cb0e2f0e6e/terraform test_working_directory=/tmp/plugintest39002544 test_step_number=1
2025-04-14T00:40:13.2144571Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-14T00:40:13.2145688Z         
2025-04-14T00:40:13.2147678Z         Error: error disabling the Backup Compliance Policy: 67fc566b3aaa5f3ce5d62c66: https://cloud-dev.mongodb.com/api/atlas/v2/groups/67fc566b3aaa5f3ce5d62c66/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-14T00:40:13.2149299Z         
2025-04-14T00:40:13.2149764Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.47s)
```
### 2025-04-15
#### PASS 7 seconds
### 2025-04-16
#### PASS 8 seconds
#### PASS 7 seconds
### 2025-04-17
#### PASS 7 seconds
### 2025-04-18
#### FAIL 5 seconds
```
2025-04-18T00:40:21.4638349Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-18T00:40:21.4648310Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-18T00:40:21.4662204Z    test_name=TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand test_terraform_path=/home/runner/work/_temp/89391f8f-543b-479d-aa23-de725df12e37/terraform
2025-04-18T00:40:21.4663963Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-18T00:40:21.4665084Z         
2025-04-18T00:40:21.4667151Z         Error: error disabling the Backup Compliance Policy: 68019c3543d6cb5077446f94: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68019c3543d6cb5077446f94/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-18T00:40:21.4668509Z         
2025-04-18T00:40:21.4668966Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.46s)
```
### 2025-04-19
#### PASS 8 seconds
### 2025-04-20
#### FAIL 4 seconds
```
2025-04-20T00:45:07.1953143Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-20T00:45:07.1960039Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-20T00:45:07.1983503Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-20T00:45:07.1985323Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-20T00:45:07.1986459Z         
2025-04-20T00:45:07.1990241Z         Error: error disabling the Backup Compliance Policy: 68043fd7e9e1f62c2da3806b: https://cloud-qa.mongodb.com/api/atlas/v2/groups/68043fd7e9e1f62c2da3806b/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-20T00:45:07.1992751Z         
2025-04-20T00:45:07.1993573Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (4.57s)
```
### 2025-04-21
#### PASS 8 seconds
### 2025-04-22
#### PASS 6 seconds
### 2025-04-23
#### PASS 5 seconds
### 2025-04-24
#### PASS 6 seconds
### 2025-04-25
#### PASS 8 seconds
### 2025-04-26
#### PASS 15 seconds
### 2025-04-27
#### FAIL 7 seconds
```
2025-04-27T00:44:15.4760451Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-27T00:44:15.4767855Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-27T00:44:15.4785571Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-04-27T00:44:15.4786953Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-04-27T00:44:15.4788114Z         
2025-04-27T00:44:15.4790383Z         Error: error disabling the Backup Compliance Policy: 680d7a62f71e7361cf7445d1: https://cloud-qa.mongodb.com/api/atlas/v2/groups/680d7a62f71e7361cf7445d1/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-04-27T00:44:15.4791747Z         
2025-04-27T00:44:15.4792199Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (7.09s)
```
### 2025-04-28
#### PASS 6 seconds
### 2025-04-29
#### PASS 7 seconds
### 2025-04-30
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-05-01
#### PASS 7 seconds
#### PASS 8 seconds
#### PASS 5 seconds
#### PASS 5 seconds
#### PASS 8 seconds
#### PASS 7 seconds
#### PASS 7 seconds
### 2025-05-02
#### FAIL 6 seconds
```
2025-05-02T00:42:42.4102850Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-02T00:42:42.4111182Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-02T00:42:42.4131875Z    test_terraform_path=/home/runner/work/_temp/caf10db3-56d8-4941-9373-e4c7e8a9d884/terraform
2025-05-02T00:42:42.4133989Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-02T00:42:42.4135157Z         
2025-05-02T00:42:42.4138815Z         Error: error disabling the Backup Compliance Policy: 6814117ce5d1950b80d83959: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6814117ce5d1950b80d83959/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-02T00:42:42.4141580Z         
2025-05-02T00:42:42.4142407Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (6.31s)
```
### 2025-05-03
#### PASS 6 seconds
### 2025-05-04
#### PASS 9 seconds
### 2025-05-05
#### PASS 8 seconds
### 2025-05-06
#### FAIL 4 seconds
```
2025-05-06T00:41:41.5081278Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-06T00:41:41.5089866Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-06T00:41:41.5116151Z    test_terraform_path=/home/runner/work/_temp/6b9f5653-056b-4f42-990d-846b8be3cccb/terraform test_working_directory=/tmp/plugintest3149255343
2025-05-06T00:41:41.5117350Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-06T00:41:41.5117966Z         
2025-05-06T00:41:41.5119897Z         Error: error disabling the Backup Compliance Policy: 6819579b672b3b2681c563e8: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6819579b672b3b2681c563e8/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-06T00:41:41.5121244Z         
2025-05-06T00:41:41.5121698Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (4.86s)
```
### 2025-05-07
#### PASS 6 seconds
### 2025-05-08
#### PASS 6 seconds
### 2025-05-09
#### FAIL 5 seconds
```
2025-05-09T00:42:26.6161554Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-09T00:42:26.6168741Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-09T00:42:26.6191903Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-09T00:42:26.6193599Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-09T00:42:26.6194860Z         
2025-05-09T00:42:26.6198365Z         Error: error disabling the Backup Compliance Policy: 681d4c16e91d32740b068cbd: https://cloud-dev.mongodb.com/api/atlas/v2/groups/681d4c16e91d32740b068cbd/backupCompliancePolicy DELETE: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-05-09T00:42:26.6200801Z         
2025-05-09T00:42:26.6201594Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (5.52s)
```
### 2025-05-10
#### PASS 9 seconds
### 2025-05-11
#### FAIL a second
```
2025-05-11T00:29:53.7315317Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-11T00:29:53.7319858Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-11T00:29:53.7333996Z   
2025-05-11T00:29:53.7346765Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-11T00:29:53.7347552Z     resource_backup_compliance_policy_test.go:103: Step 1/1 error: Error running apply: exit status 1
2025-05-11T00:29:53.7348090Z         
2025-05-11T00:29:53.7348571Z         Error: error creating project: test-acc-tf-p-8104997385633504406
2025-05-11T00:29:53.7348988Z         
2025-05-11T00:29:53.7349361Z           with mongodbatlas_project.test,
2025-05-11T00:29:53.7350030Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-05-11T00:29:53.7350642Z           12: 		resource "mongodbatlas_project" "test" {
2025-05-11T00:29:53.7351269Z         
2025-05-11T00:29:53.7351945Z         (503 Service Unavailable) failed to decode response body: undefined response
2025-05-11T00:29:53.7352426Z         type
2025-05-11T00:29:53.7369426Z    test_name=TestAccBackupCompliancePolicy_UpdateSetsAllAttributes test_terraform_path=/home/runner/work/_temp/27f63ce6-92a5-4654-8d3b-827062f20811/terraform
2025-05-11T00:29:53.7402318Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (1.25s)
```
### 2025-05-12
#### FAIL 4 seconds
```
2025-05-12T00:42:46.9959462Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-12T00:42:46.9966394Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-05-12T00:42:46.9979825Z   
2025-05-12T00:42:46.9980667Z     resource_backup_compliance_policy_test.go:103: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-12T00:42:46.9981310Z         
2025-05-12T00:42:46.9983965Z         Error: error disabling the Backup Compliance Policy: 682140fb2ff6323bbb5053ad: https://cloud-dev.mongodb.com/api/atlas/v2/groups/682140fb2ff6323bbb5053ad/backupCompliancePolicy DELETE: HTTP 400 Bad Request (Error code: "CANNOT_UPDATE_BACKUP_COMPLIANCE_POLICY_SETTINGS_WITH_PENDING_ACTION") Detail: Cannot update Backup Compliance Policy settings while there is a pending action. Reason: Bad Request. Params: [], BadRequestDetail: 
2025-05-12T00:42:46.9985646Z         
2025-05-12T00:42:46.9986119Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (4.49s)
```
### 2025-05-13
#### PASS 7 seconds
#### PASS 6 seconds
### 2025-05-14
#### PASS 8 seconds
### 2025-05-15
#### PASS 6 seconds
### 2025-05-16
#### PASS 6 seconds
### 2025-05-17
#### PASS 7 seconds
### 2025-05-18
#### PASS 7 seconds
### 2025-05-19
#### PASS 6 seconds
### 2025-05-20
#### PASS 8 seconds
### 2025-05-21
#### PASS 4 seconds
### 2025-05-22
#### PASS 7 seconds
### 2025-05-23
#### PASS 9 seconds
### 2025-05-24
#### PASS 7 seconds
### 2025-05-25
#### PASS 5 seconds
### 2025-05-26
#### PASS 8 seconds
### 2025-05-27
#### PASS 6 seconds
#### PASS 5 seconds
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
#### PASS 6 seconds
### 2025-05-29
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-05-30
#### PASS 8 seconds
### 2025-05-31
#### PASS 9 seconds
### 2025-06-01
#### PASS 5 seconds
#### PASS 6 seconds
#### PASS 5 seconds
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
#### PASS 5 seconds
### 2025-06-02
#### PASS 7 seconds
#### PASS 6 seconds
#### PASS 6 seconds
### 2025-06-03
#### PASS 5 seconds
### 2025-06-04
#### PASS 8 seconds
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
### 2025-06-07
#### PASS 7 seconds
### 2025-06-08
#### PASS 6 seconds
### 2025-06-09
#### PASS 6 seconds
### 2025-06-10
#### PASS 6 seconds
### 2025-06-11
#### PASS 6 seconds
#### PASS 8 seconds
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
### 2025-06-15
#### PASS 35 seconds
### 2025-06-16
#### PASS 37 seconds
### 2025-06-17
#### PASS 34 seconds
### 2025-06-18
#### PASS 34 seconds
### 2025-06-19
#### PASS 36 seconds
### 2025-06-20
#### PASS 37 seconds
### 2025-06-21
#### PASS 38 seconds
### 2025-06-22
#### PASS 50 seconds
### 2025-06-23
#### PASS 35 seconds
### 2025-06-24
#### PASS 34 seconds
### 2025-06-25
#### PASS 36 seconds
### 2025-06-26
#### PASS 35 seconds
### 2025-06-27
#### PASS 38 seconds
### 2025-06-28
#### PASS 35 seconds
### 2025-06-29
#### PASS 39 seconds
### 2025-06-30
#### PASS 38 seconds
### 2025-07-01
#### PASS 37 seconds
#### PASS 39 seconds
#### PASS 36 seconds
#### PASS 35 seconds
#### PASS 38 seconds
#### PASS 35 seconds
### 2025-07-02
#### PASS 38 seconds
### 2025-07-03
#### PASS 36 seconds
### 2025-07-04
#### PASS 38 seconds
### 2025-07-05
#### PASS 35 seconds
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:46:50.0777701Z === RUN   TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-06T00:46:50.0784249Z === CONT  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-06T00:46:50.0915322Z === NAME  TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand
2025-07-06T00:46:50.0916848Z     resource_backup_compliance_policy_test.go:104: Step 1/1 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:46:50.0917855Z         
2025-07-06T00:46:50.0918635Z         Error: error when getting project properties after create
2025-07-06T00:46:50.0919317Z         
2025-07-06T00:46:50.0919927Z           with mongodbatlas_project.test,
2025-07-06T00:46:50.0921098Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-06T00:46:50.0922177Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-06T00:46:50.0922947Z         
2025-07-06T00:46:50.0923859Z         error getting project (6869c402690ae45e168bcdff): error getting project's
2025-07-06T00:46:50.0924781Z         limits (6869c402690ae45e168bcdff):
2025-07-06T00:46:50.0925920Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c402690ae45e168bcdff/limits
2025-07-06T00:46:50.0927236Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:46:50.0928390Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:46:50.0929190Z         BadRequestDetail: 
2025-07-06T00:46:50.0930054Z --- FAIL: TestAccBackupCompliancePolicy_withoutRestoreWindowDaysAndOnDemand (66.30s)
```
### 2025-07-07
#### PASS 35 seconds
### 2025-07-08
#### PASS 38 seconds
### 2025-07-09
#### PASS 37 seconds