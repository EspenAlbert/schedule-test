# config/apikeyprojectassignment/TestAccApiKeyProjectAssignmentRS_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 24) FAIL(x 7)
Success rate: 77.42%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:08](#error-2026-05-09t0108300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-05-19 01:08](#error-2026-05-19t0108270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.01s
[2026-05-21 01:09](#error-2026-05-21t0109260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.05s
[2026-05-26 02:14](#error-2026-05-26t0214460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.10s
[2026-05-28 01:02](#error-2026-05-28t0102570000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 6.07s
[2026-05-30 01:08](#error-2026-05-30t0108510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-06-02 01:16](#error-2026-06-02t0116140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 16 seconds
  - PASS 18 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09

### Error 2026-05-09T01:08:30+00:00
```
2026-05-09T01:08:30.7774505Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-05-09T01:08:30.7775179Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-05-09T01:08:30.7783505Z   
2026-05-09T01:08:30.7783815Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-05-09T01:08:30.7784101Z         
2026-05-09T01:08:30.7784439Z         Error: error creating project: test-acc-tf-p-1842649082448733539
2026-05-09T01:08:30.7784720Z         
2026-05-09T01:08:30.7784957Z           with mongodbatlas_project.test,
2026-05-09T01:08:30.7785429Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-05-09T01:08:30.7785980Z           18: 		resource "mongodbatlas_project" "test" {
2026-05-09T01:08:30.7786220Z         
2026-05-09T01:08:30.7786599Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T01:08:30.7787090Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T01:08:30.7787541Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:08:30.7787877Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (64.71s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 14 seconds
- 2026-05-12 PASS 18 seconds
- 2026-05-13 PASS 15 seconds
- 2026-05-14 PASS 15 seconds
- 2026-05-15 PASS 13 seconds
- 2026-05-16 PASS 30 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 15 seconds
- 2026-05-19

### Error 2026-05-19T01:08:27+00:00
```
2026-05-19T01:08:27.1680140Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-05-19T01:08:27.1682162Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-05-19T01:08:27.1708337Z   
2026-05-19T01:08:27.1709337Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-05-19T01:08:27.1710290Z         
2026-05-19T01:08:27.1711342Z         Error: error creating project: test-acc-tf-p-3941745501401999862
2026-05-19T01:08:27.1712018Z         
2026-05-19T01:08:27.1712867Z           with mongodbatlas_project.test,
2026-05-19T01:08:27.1714252Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:27.1715610Z           18: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:27.1716387Z         
2026-05-19T01:08:27.1717519Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:27.1719061Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:27.1726828Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:27.1727667Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (70.13s)
```

- 2026-05-20 PASS 18 seconds
- 2026-05-21

### Error 2026-05-21T01:09:26+00:00
```
2026-05-21T01:09:26.8568481Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-05-21T01:09:26.8569236Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-05-21T01:09:26.8580790Z   
2026-05-21T01:09:26.8581325Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-05-21T01:09:26.8581719Z         
2026-05-21T01:09:26.8582152Z         Error: error creating project: test-acc-tf-p-2118824244045851924
2026-05-21T01:09:26.8582522Z         
2026-05-21T01:09:26.8582832Z           with mongodbatlas_project.test,
2026-05-21T01:09:26.8583469Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-05-21T01:09:26.8584069Z           18: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:09:26.8584390Z         
2026-05-21T01:09:26.8584871Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:09:26.8585542Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:09:26.8586153Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:26.8586601Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (98.53s)
```

- 2026-05-22 PASS 15 seconds
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS 17 seconds
- 2026-05-26

### Error 2026-05-26T02:14:46+00:00
```
2026-05-26T02:14:46.0472431Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-05-26T02:14:46.0473410Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-05-26T02:14:46.0484182Z    test_name=TestAccApiKeyProjectAssignmentRS_basic test_terraform_path=/home/runner/work/_temp/065c00ee-992c-4dce-b7fb-09555f38feb0/terraform
2026-05-26T02:14:46.0485005Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-05-26T02:14:46.0485379Z         
2026-05-26T02:14:46.0485789Z         Error: error creating project: test-acc-tf-p-8739983501473633421
2026-05-26T02:14:46.0486155Z         
2026-05-26T02:14:46.0486449Z           with mongodbatlas_project.test,
2026-05-26T02:14:46.0487062Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-05-26T02:14:46.0487644Z           18: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:14:46.0487940Z         
2026-05-26T02:14:46.0488525Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:14:46.0489176Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:14:46.0489768Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:14:46.0490200Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (78.97s)
```

- 2026-05-27 PASS 17 seconds
- 2026-05-28

### Error 2026-05-28T01:02:57+00:00
```
2026-05-28T01:02:57.6476605Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-05-28T01:02:57.6477335Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-05-28T01:02:57.6489965Z    test_working_directory=/tmp/plugintest1699709715
2026-05-28T01:02:57.6490477Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-05-28T01:02:57.6490965Z         
2026-05-28T01:02:57.6491389Z         Error: error creating project: test-acc-tf-p-5410513092197468421
2026-05-28T01:02:57.6491764Z         
2026-05-28T01:02:57.6492069Z           with mongodbatlas_project.test,
2026-05-28T01:02:57.6492681Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-05-28T01:02:57.6493261Z           18: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:02:57.6493565Z         
2026-05-28T01:02:57.6494044Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request
2026-05-28T01:02:57.6494849Z         (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups
2026-05-28T01:02:57.6495504Z         per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to
2026-05-28T01:02:57.6496149Z         add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c],
2026-05-28T01:02:57.6496577Z         BadRequestDetail: 
2026-05-28T01:02:57.6496902Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (6.68s)
```

- 2026-05-29 PASS 11 seconds
- 2026-05-30

### Error 2026-05-30T01:08:51+00:00
```
2026-05-30T01:08:51.9490383Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-05-30T01:08:51.9491175Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-05-30T01:08:51.9502489Z    test_name=TestAccApiKeyProjectAssignmentRS_basic
2026-05-30T01:08:51.9503060Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-05-30T01:08:51.9503484Z         
2026-05-30T01:08:51.9503950Z         Error: error creating project: test-acc-tf-p-6395009136614176532
2026-05-30T01:08:51.9504340Z         
2026-05-30T01:08:51.9504670Z           with mongodbatlas_project.test,
2026-05-30T01:08:51.9505319Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:51.9505929Z           18: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:51.9506271Z         
2026-05-30T01:08:51.9506794Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:51.9507749Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:51.9508404Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:51.9508890Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (62.51s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 12 seconds
- 2026-06-02

### Error 2026-06-02T01:16:14+00:00
```
2026-06-02T01:16:14.0411796Z === RUN   TestAccApiKeyProjectAssignmentRS_basic
2026-06-02T01:16:14.0412404Z === CONT  TestAccApiKeyProjectAssignmentRS_basic
2026-06-02T01:16:14.0421330Z   
2026-06-02T01:16:14.0421892Z     resource_test.go:31: Step 1/3 error: Error running apply: exit status 1
2026-06-02T01:16:14.0422206Z         
2026-06-02T01:16:14.0422557Z         Error: error creating project: test-acc-tf-p-7814216732373223176
2026-06-02T01:16:14.0422864Z         
2026-06-02T01:16:14.0423123Z           with mongodbatlas_project.test,
2026-06-02T01:16:14.0423617Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_project" "test":
2026-06-02T01:16:14.0424083Z           18: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:16:14.0424341Z         
2026-06-02T01:16:14.0424725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:16:14.0425253Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:16:14.0425729Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0426097Z --- FAIL: TestAccApiKeyProjectAssignmentRS_basic (70.22s)
```

- 2026-06-03 PASS 18 seconds
- 2026-06-04 PASS 20 seconds
- 2026-06-05 PASS 15 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 16 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 15 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 15 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 12 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
