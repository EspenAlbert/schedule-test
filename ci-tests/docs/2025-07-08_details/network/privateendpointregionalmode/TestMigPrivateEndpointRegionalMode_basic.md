# network/privateendpointregionalmode/TestMigPrivateEndpointRegionalMode_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS a minute
```
2025-07-01T08:45:58.4598041Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-01T08:45:58.4601079Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-01T08:45:58.4601857Z --- PASS: TestMigPrivateEndpointRegionalMode_basic (72.38s)
```
### 2025-07-02
#### PASS a minute
```
2025-07-02T00:41:12.3591074Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-02T00:41:12.3595951Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-02T00:41:12.3597213Z --- PASS: TestMigPrivateEndpointRegionalMode_basic (70.74s)
```
### 2025-07-03
#### PASS a minute
```
2025-07-03T00:41:46.0958383Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-03T00:41:46.0961297Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-03T00:41:46.0962080Z --- PASS: TestMigPrivateEndpointRegionalMode_basic (72.40s)
```
### 2025-07-04
#### PASS a minute
```
2025-07-04T00:41:12.9193143Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-04T00:41:12.9195863Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-04T00:41:12.9196637Z --- PASS: TestMigPrivateEndpointRegionalMode_basic (70.72s)
```
### 2025-07-05
#### PASS a minute
```
2025-07-05T00:40:18.8607291Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-05T00:40:18.8610232Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-05T00:40:18.8610988Z --- PASS: TestMigPrivateEndpointRegionalMode_basic (70.94s)
```
### 2025-07-06
#### FAIL a minute
```
2025-07-06T00:44:46.6397294Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6400130Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6446039Z === NAME  TestMigPrivateEndpointRegionalMode_basic
2025-07-06T00:44:46.6446810Z     resource_private_endpoint_regional_mode_migration_test.go:10: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-06T00:44:46.6447372Z         
2025-07-06T00:44:46.6447768Z         Error: error when getting project properties after create
2025-07-06T00:44:46.6448115Z         
2025-07-06T00:44:46.6448441Z           with mongodbatlas_project.project,
2025-07-06T00:44:46.6449077Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "project":
2025-07-06T00:44:46.6449663Z           14: 		resource "mongodbatlas_project" "project" {
2025-07-06T00:44:46.6450105Z         
2025-07-06T00:44:46.6450568Z         error getting project (6869c406690ae45e168bd269): error getting project's
2025-07-06T00:44:46.6451045Z         limits (6869c406690ae45e168bd269):
2025-07-06T00:44:46.6451633Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6869c406690ae45e168bd269/limits
2025-07-06T00:44:46.6452321Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-06T00:44:46.6452914Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-06T00:44:46.6453327Z         BadRequestDetail: 
2025-07-06T00:44:46.6454228Z --- FAIL: TestMigPrivateEndpointRegionalMode_basic (102.86s)
```
### 2025-07-07
#### PASS a minute
```
2025-07-07T00:43:51.4408668Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-07T00:43:51.4414153Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-07T00:43:51.4415716Z --- PASS: TestMigPrivateEndpointRegionalMode_basic (71.47s)
```
### 2025-07-08
#### PASS a minute
```
2025-07-08T00:41:50.6688704Z === RUN   TestMigPrivateEndpointRegionalMode_basic
2025-07-08T00:41:50.6691603Z === CONT  TestMigPrivateEndpointRegionalMode_basic
2025-07-08T00:41:50.6692375Z --- PASS: TestMigPrivateEndpointRegionalMode_basic (75.62s)
```