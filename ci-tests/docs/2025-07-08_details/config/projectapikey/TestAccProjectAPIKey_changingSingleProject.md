# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 23 seconds
### 2025-07-03
#### PASS 43 seconds
### 2025-07-04
#### PASS 28 seconds
### 2025-07-05
#### PASS 46 seconds
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
### 2025-07-08
#### PASS 48 seconds