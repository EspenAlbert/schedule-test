# config/projectapikey/TestMigProjectAPIKey_basic Test Details
# Found 7 TestRuns in dev, qa from 2025-07-02 to 2025-07-08 from master branch: 1 unique tests, PASS(x 6) FAIL
Success rate: 85.71%

## Timeline
2025-07-01: MISSING
### 2025-07-02
#### PASS 15 seconds
### 2025-07-03
#### PASS 25 seconds
### 2025-07-04
#### PASS 18 seconds
### 2025-07-05
#### PASS 31 seconds
### 2025-07-06
#### FAIL 6 seconds
```
2025-07-06T00:34:00.2821567Z === RUN   TestMigProjectAPIKey_basic
2025-07-06T00:34:00.2822151Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-4065518232293398172
2025-07-06T00:34:00.2828429Z === CONT  TestMigProjectAPIKey_basic
2025-07-06T00:34:00.2958540Z === NAME  TestMigProjectAPIKey_basic
2025-07-06T00:34:00.2959480Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-06T00:34:00.2960221Z         
2025-07-06T00:34:00.2961117Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2961808Z         
2025-07-06T00:34:00.2962359Z           with mongodbatlas_project_api_key.test,
2025-07-06T00:34:00.2963455Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-07-06T00:34:00.2964448Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-06T00:34:00.2964950Z         
2025-07-06T00:34:00.2972040Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-06T00:34:00.2972743Z         
2025-07-06T00:34:00.2973623Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-06T00:34:00.2974299Z         
2025-07-06T00:34:00.2974679Z --- FAIL: TestMigProjectAPIKey_basic (6.85s)
```
### 2025-07-07
#### PASS 16 seconds
### 2025-07-08
#### PASS 29 seconds