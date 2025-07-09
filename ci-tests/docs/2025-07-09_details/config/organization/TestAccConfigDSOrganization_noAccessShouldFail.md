# config/organization/TestAccConfigDSOrganization_noAccessShouldFail Test Details
# Found 115 TestRuns in dev, qa from 2025-04-11 to 2025-07-09 from master branch: 1 unique tests, PASS(x 106) FAIL(x 9)
Success rate: 92.17%

# #  Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
2025-05-11 00:29 |  | qa |  | 0.07s
2025-06-17 00:31 | API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId} | dev | real_test_failure | 2.02s
2025-06-18 00:30 | API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId} | dev | real_test_failure | 1.02s
2025-06-18 07:30 | API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId} | dev | real_test_failure | 1.04s
2025-06-19 00:31 | API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId} | dev | real_test_failure | 0.07s
2025-06-20 00:30 | API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId} | dev | real_test_failure | 1.06s
2025-06-21 00:30 |  | dev |  | 0.07s
2025-06-22 00:33 |  | qa |  | 0.06s
2025-06-23 00:32 | API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId} | dev | real_test_failure | 1.05s

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
#### PASS a moment
### 2025-04-12
#### PASS a second
### 2025-04-13
#### PASS a moment
### 2025-04-14
#### PASS a moment
### 2025-04-15
#### PASS a moment
### 2025-04-16
#### PASS a moment
#### PASS a moment
### 2025-04-17
#### PASS a moment
### 2025-04-18
#### PASS a moment
### 2025-04-19
#### PASS a moment
### 2025-04-20
#### PASS a moment
### 2025-04-21
#### PASS a moment
### 2025-04-22
#### PASS a moment
### 2025-04-23
#### PASS a moment
### 2025-04-24
#### PASS a moment
### 2025-04-25
#### PASS a second
### 2025-04-26
#### PASS 2 seconds
### 2025-04-27
#### PASS a moment
### 2025-04-28
#### PASS a second
### 2025-04-29
#### PASS a moment
### 2025-04-30
#### PASS 2 seconds
#### PASS 2 seconds
### 2025-05-01
#### PASS 2 seconds
#### PASS 2 seconds
#### PASS a second
#### PASS a second
#### PASS a moment
#### PASS 2 seconds
#### PASS a moment
### 2025-05-02
#### PASS 2 seconds
### 2025-05-03
#### PASS a moment
### 2025-05-04
#### PASS a second
### 2025-05-05
#### PASS a second
### 2025-05-06
#### PASS 2 seconds
### 2025-05-07
#### PASS a moment
### 2025-05-08
#### PASS 2 seconds
### 2025-05-09
#### PASS a second
### 2025-05-10
#### PASS 2 seconds
### 2025-05-11
#### FAIL a moment
```
2025-05-11T00:29:54.1928869Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-05-11T00:29:54.1932918Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-05-11T00:29:54.2038853Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-05-11T00:29:54.2040270Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-05-11T00:29:54.2041375Z         
2025-05-11T00:29:54.2042904Z         Error: error getting organization information: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:54.2043925Z         
2025-05-11T00:29:54.2044523Z           with data.mongodbatlas_organizations.test,
2025-05-11T00:29:54.2045646Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_organizations" "test":
2025-05-11T00:29:54.2046654Z           12: 		data "mongodbatlas_organizations" "test" {
2025-05-11T00:29:54.2047169Z         
2025-05-11T00:29:54.2048831Z         Error: error getting organizations information: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:54.2049849Z         
2025-05-11T00:29:54.2050432Z           with data.mongodbatlas_organization.test,
2025-05-11T00:29:54.2051678Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-05-11T00:29:54.2052691Z           17: 		data "mongodbatlas_organization" "test" {
2025-05-11T00:29:54.2053216Z         
2025-05-11T00:29:54.2054345Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (0.73s)
```
### 2025-05-12
#### PASS a second
### 2025-05-13
#### PASS a second
#### PASS 2 seconds
### 2025-05-14
#### PASS a second
### 2025-05-15
#### PASS 2 seconds
### 2025-05-16
#### PASS a second
### 2025-05-17
#### PASS a moment
### 2025-05-18
#### PASS a second
### 2025-05-19
#### PASS a second
### 2025-05-20
#### PASS a moment
### 2025-05-21
#### PASS a second
### 2025-05-22
#### PASS a second
### 2025-05-23
#### PASS a second
### 2025-05-24
#### PASS a second
### 2025-05-25
#### PASS a second
### 2025-05-26
#### PASS a second
### 2025-05-27
#### PASS 2 seconds
### 2025-05-28
#### PASS a second
#### PASS a second
#### PASS a second
### 2025-05-29
#### PASS a second
### 2025-05-30
#### PASS a second
### 2025-05-31
#### PASS a moment
### 2025-06-01
#### PASS a moment
#### PASS a second
#### PASS a moment
#### PASS 2 seconds
#### PASS 2 seconds
#### PASS a moment
### 2025-06-02
#### PASS a moment
#### PASS a moment
#### PASS a second
### 2025-06-03
#### PASS a second
### 2025-06-04
#### PASS a second
### 2025-06-05
#### PASS a second
### 2025-06-06
#### PASS a second
### 2025-06-07
#### PASS a second
### 2025-06-08
#### PASS a moment
### 2025-06-09
#### PASS a second
### 2025-06-10
#### PASS a second
### 2025-06-11
#### PASS a second
#### PASS a moment
### 2025-06-12
#### PASS a second
### 2025-06-13
#### PASS a second
### 2025-06-14
#### PASS a second
### 2025-06-15
#### PASS a second
### 2025-06-16
#### PASS 2 seconds
### 2025-06-17
#### FAIL 2 seconds
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-17T00:31:02.976000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='18 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-17T00:31:02.9761996Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-17T00:31:02.9764093Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-17T00:31:02.9775650Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-17T00:31:02.9776385Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-17T00:31:02.9776912Z         
2025-06-17T00:31:02.9778362Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-17T00:31:02.9779271Z         
2025-06-17T00:31:02.9779607Z           with data.mongodbatlas_organization.test,
2025-06-17T00:31:02.9780208Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-17T00:31:02.9780737Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-17T00:31:02.9781020Z         
2025-06-17T00:31:02.9781305Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (2.20s)
```
### 2025-06-18
#### FAIL a second
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-18T00:30:54.369000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='18 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-18T00:30:54.3694245Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-18T00:30:54.3698050Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-18T00:30:54.3718787Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-18T00:30:54.3720407Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-18T00:30:54.3721499Z         
2025-06-18T00:30:54.3724495Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-18T00:30:54.3726504Z         
2025-06-18T00:30:54.3727331Z           with data.mongodbatlas_organization.test,
2025-06-18T00:30:54.3728671Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-18T00:30:54.3729751Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-18T00:30:54.3730394Z         
2025-06-18T00:30:54.3731026Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (1.24s)
```
#### FAIL a second
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-18T07:30:47.183000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='18 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-18T07:30:47.1830556Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-18T07:30:47.1832626Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-18T07:30:47.1844138Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-18T07:30:47.1844872Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-18T07:30:47.1845398Z         
2025-06-18T07:30:47.1846745Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-18T07:30:47.1847767Z         
2025-06-18T07:30:47.1848100Z           with data.mongodbatlas_organization.test,
2025-06-18T07:30:47.1848700Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-18T07:30:47.1849243Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-18T07:30:47.1849530Z         
2025-06-18T07:30:47.1849816Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (1.41s)
```
### 2025-06-19
#### FAIL a moment
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-19T00:31:04.769000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='19 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-19T00:31:04.0769274Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-19T00:31:04.0773284Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-19T00:31:04.0793006Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-19T00:31:04.0794203Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-19T00:31:04.0795085Z         
2025-06-19T00:31:04.0797412Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-19T00:31:04.0798908Z         
2025-06-19T00:31:04.0799440Z           with data.mongodbatlas_organization.test,
2025-06-19T00:31:04.0800421Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-19T00:31:04.0801292Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-19T00:31:04.0801754Z         
2025-06-19T00:31:04.0802394Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (0.65s)
```
### 2025-06-20
#### FAIL a second
GoTestErrorClassification(error_class='real_test_failure',author='human',run_id='2025-06-20T00:30:41.135000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='19 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-20T00:30:41.1353878Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-20T00:30:41.1356345Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-20T00:30:41.1368435Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-20T00:30:41.1369323Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-20T00:30:41.1369875Z         
2025-06-20T00:30:41.1371780Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-20T00:30:41.1372948Z         
2025-06-20T00:30:41.1373448Z           with data.mongodbatlas_organization.test,
2025-06-20T00:30:41.1374313Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-20T00:30:41.1375079Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-20T00:30:41.1375398Z         
2025-06-20T00:30:41.1375711Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (1.61s)
```
### 2025-06-21
#### FAIL a moment
```
2025-06-21T00:30:24.1429247Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-21T00:30:24.1431347Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-21T00:30:24.1451192Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-21T00:30:24.1452512Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-21T00:30:24.1453542Z         
2025-06-21T00:30:24.1456269Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-21T00:30:24.1458055Z         
2025-06-21T00:30:24.1458674Z           with data.mongodbatlas_organization.test,
2025-06-21T00:30:24.1459822Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-21T00:30:24.1460809Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-21T00:30:24.1461350Z         
2025-06-21T00:30:24.1461896Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (0.67s)
```
### 2025-06-22
#### FAIL a moment
```
2025-06-22T00:33:39.3768544Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-22T00:33:39.3772633Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-22T00:33:39.3800411Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-22T00:33:39.3802265Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-22T00:33:39.3803352Z         
2025-06-22T00:33:39.3806368Z         Error: error getting organizations information: https://cloud-qa.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-22T00:33:39.3808457Z         
2025-06-22T00:33:39.3809182Z           with data.mongodbatlas_organization.test,
2025-06-22T00:33:39.3810410Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-22T00:33:39.3811700Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-22T00:33:39.3812342Z         
2025-06-22T00:33:39.3812854Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (0.58s)
```
### 2025-06-23
#### FAIL a second
GoTestErrorClassification(error_class='real_test_failure',author='similar',run_id='2025-06-23T00:32:57.693000+00:00-TestAccConfigDSOrganization_noAccessShouldFail',confidence=1.0,ts_when='16 days ago')
API Error INVALID_ORG_ID /api/atlas/v2/orgs/{orgId}
```
2025-06-23T00:32:57.6930983Z === RUN   TestAccConfigDSOrganization_noAccessShouldFail
2025-06-23T00:32:57.6933109Z === CONT  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-23T00:32:57.6945066Z === NAME  TestAccConfigDSOrganization_noAccessShouldFail
2025-06-23T00:32:57.6945820Z     resource_organization_test.go:166: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-06-23T00:32:57.6946361Z         
2025-06-23T00:32:57.6947736Z         Error: error getting organizations information: https://cloud-dev.mongodb.com/api/atlas/v2/orgs/555 GET: HTTP 404 Not Found (Error code: "INVALID_ORG_ID") Detail: An invalid organization ID 555 was specified. Reason: Not Found. Params: [555], BadRequestDetail: 
2025-06-23T00:32:57.6948671Z         
2025-06-23T00:32:57.6949002Z           with data.mongodbatlas_organization.test,
2025-06-23T00:32:57.6949613Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-06-23T00:32:57.6950162Z           17: 		data "mongodbatlas_organization" "test" {
2025-06-23T00:32:57.6950462Z         
2025-06-23T00:32:57.6950864Z --- FAIL: TestAccConfigDSOrganization_noAccessShouldFail (1.49s)
```
### 2025-06-24
#### PASS a second
### 2025-06-25
#### PASS a second
### 2025-06-26
#### PASS a second
### 2025-06-27
#### PASS a second
### 2025-06-28
#### PASS a second
### 2025-06-29
#### PASS a moment
### 2025-06-30
#### PASS 2 seconds
### 2025-07-01
#### PASS a second
#### PASS a second
#### PASS 2 seconds
#### PASS a second
#### PASS 2 seconds
#### PASS a moment
### 2025-07-02
#### PASS a moment
### 2025-07-03
#### PASS a second
### 2025-07-04
#### PASS a second
### 2025-07-05
#### PASS a second
### 2025-07-06
#### PASS a moment
### 2025-07-07
#### PASS a second
### 2025-07-08
#### PASS a second
### 2025-07-09
#### PASS 2 seconds