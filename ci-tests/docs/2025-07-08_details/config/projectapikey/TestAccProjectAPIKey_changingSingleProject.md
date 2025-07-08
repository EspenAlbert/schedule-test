# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 25 seconds
```
2025-07-01T08:35:29.4685876Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-01T08:35:29.4698310Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-01T08:35:29.4717478Z --- PASS: TestAccProjectAPIKey_changingSingleProject (25.83s)
```
### 2025-07-02
#### PASS 23 seconds
```
2025-07-02T00:30:40.8685667Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-02T00:30:40.8692856Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-02T00:30:40.8703709Z --- PASS: TestAccProjectAPIKey_changingSingleProject (23.41s)
```
### 2025-07-03
#### PASS 43 seconds
```
2025-07-03T00:31:32.1137863Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-03T00:31:32.1151508Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-03T00:31:32.1163594Z --- PASS: TestAccProjectAPIKey_changingSingleProject (43.13s)
```
### 2025-07-04
#### PASS 28 seconds
```
2025-07-04T00:30:47.2510472Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-04T00:30:47.2520636Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-04T00:30:47.2539428Z --- PASS: TestAccProjectAPIKey_changingSingleProject (28.87s)
```
### 2025-07-05
#### PASS 46 seconds
```
2025-07-05T00:30:14.7937913Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-05T00:30:14.7947517Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-05T00:30:14.7958486Z --- PASS: TestAccProjectAPIKey_changingSingleProject (46.42s)
```
### 2025-07-06
#### FAIL 34 seconds
```
2025-07-06T00:34:00.2823471Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.2830018Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.3030634Z === NAME  TestAccProjectAPIKey_changingSingleProject
2025-07-06T00:34:00.3031596Z     resource_project_api_key_test.go:63: Step 1/4 error: Error running apply: exit status 1
2025-07-06T00:34:00.3032282Z         
2025-07-06T00:34:00.3032956Z         Error: error when getting project properties after create
2025-07-06T00:34:00.3033505Z         
2025-07-06T00:34:00.3034026Z           with mongodbatlas_project.proj2,
2025-07-06T00:34:00.3035079Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "proj2":
2025-07-06T00:34:00.3036236Z           12: 		resource "mongodbatlas_project" "proj2" {
2025-07-06T00:34:00.3036736Z         
2025-07-06T00:34:00.3037508Z         error getting project (6869c4547267b5775b683fb3): error getting project's
2025-07-06T00:34:00.3038292Z         limits (6869c4547267b5775b683fb3):
2025-07-06T00:34:00.3039267Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4547267b5775b683fb3/limits
2025-07-06T00:34:00.3040405Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.3041398Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.3042069Z         BadRequestDetail: 
2025-07-06T00:34:00.3042617Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (34.49s)
```
### 2025-07-07
#### PASS 24 seconds
```
2025-07-07T00:33:18.3675019Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-07T00:33:18.3689905Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-07T00:33:18.3742498Z --- PASS: TestAccProjectAPIKey_changingSingleProject (24.26s)
```
### 2025-07-08
#### PASS 48 seconds
```
2025-07-08T00:31:37.4382936Z === RUN   TestAccProjectAPIKey_changingSingleProject
2025-07-08T00:31:37.4395585Z === CONT  TestAccProjectAPIKey_changingSingleProject
2025-07-08T00:31:37.4415115Z --- PASS: TestAccProjectAPIKey_changingSingleProject (48.27s)
```