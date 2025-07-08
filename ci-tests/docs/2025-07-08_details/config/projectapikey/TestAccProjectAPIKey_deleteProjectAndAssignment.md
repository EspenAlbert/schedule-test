# config/projectapikey/TestAccProjectAPIKey_deleteProjectAndAssignment Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 11 seconds
```
2025-07-01T08:35:29.4692454Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-01T08:35:29.4696392Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-01T08:35:29.4714999Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.12s)
```
### 2025-07-02
#### PASS 11 seconds
```
2025-07-02T00:30:40.8689219Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-02T00:30:40.8691475Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-02T00:30:40.8702220Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (11.04s)
```
### 2025-07-03
#### PASS 14 seconds
```
2025-07-03T00:31:32.1146801Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-03T00:31:32.1151114Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-03T00:31:32.1161116Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.67s)
```
### 2025-07-04
#### PASS 12 seconds
```
2025-07-04T00:30:47.2515897Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-04T00:30:47.2519592Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-04T00:30:47.2536884Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (12.14s)
```
### 2025-07-05
#### PASS 14 seconds
```
2025-07-05T00:30:14.7943739Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-05T00:30:14.7946076Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-05T00:30:14.7956170Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (14.41s)
```
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
```
2025-07-07T00:33:18.3683736Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-07T00:33:18.3690820Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-07T00:33:18.3726461Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (9.25s)
```
### 2025-07-08
#### PASS 15 seconds
```
2025-07-08T00:31:37.4388847Z === RUN   TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-08T00:31:37.4393067Z === CONT  TestAccProjectAPIKey_deleteProjectAndAssignment
2025-07-08T00:31:37.4411085Z --- PASS: TestAccProjectAPIKey_deleteProjectAndAssignment (15.33s)
```