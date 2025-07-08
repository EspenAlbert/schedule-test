# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 11 seconds
### 2025-07-03
#### PASS 14 seconds
### 2025-07-04
#### PASS 12 seconds
### 2025-07-05
#### PASS 14 seconds
### 2025-07-06
#### FAIL 33 seconds
```
2025-07-06T00:34:00.2827133Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2829073Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2996816Z === NAME  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-06T00:34:00.2997784Z     resource_project_api_key_test.go:194: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2998470Z         
2025-07-06T00:34:00.2999115Z         Error: error when getting project properties after create
2025-07-06T00:34:00.2999649Z         
2025-07-06T00:34:00.3000170Z           with mongodbatlas_project.project2,
2025-07-06T00:34:00.3001229Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_project" "project2":
2025-07-06T00:34:00.3002202Z           13: 		resource "mongodbatlas_project" "project2" {
2025-07-06T00:34:00.3002694Z         
2025-07-06T00:34:00.3003453Z         error getting project (6869c4547267b5775b683f9d): error getting project's
2025-07-06T00:34:00.3004207Z         limits (6869c4547267b5775b683f9d):
2025-07-06T00:34:00.3005301Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c4547267b5775b683f9d/limits
2025-07-06T00:34:00.3006423Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:34:00.3007398Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:34:00.3008042Z         BadRequestDetail: 
2025-07-06T00:34:00.3008618Z --- FAIL: TestAccProjectAPIKey_deleteProjectAndAssignment (33.80s)
```
### 2025-07-07
#### PASS 9 seconds
### 2025-07-08
#### PASS 15 seconds