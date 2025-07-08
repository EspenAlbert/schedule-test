# config/projectapikey/TestMigProjectAPIKey_basic Test Details
# Found 8 TestRuns in dev, qa from 2025-07-01 to 2025-07-08 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
### 2025-07-01
#### PASS 16 seconds
```
2025-07-01T08:35:29.4682437Z === RUN   TestMigProjectAPIKey_basic
2025-07-01T08:35:29.4683514Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-484058323082849713
2025-07-01T08:35:29.4694771Z === CONT  TestMigProjectAPIKey_basic
2025-07-01T08:35:29.4716875Z --- PASS: TestMigProjectAPIKey_basic (16.77s)
```
### 2025-07-02
#### PASS 15 seconds
```
2025-07-02T00:30:40.8683538Z === RUN   TestMigProjectAPIKey_basic
2025-07-02T00:30:40.8684316Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-2045576610698852621
2025-07-02T00:30:40.8690539Z === CONT  TestMigProjectAPIKey_basic
2025-07-02T00:30:40.8703347Z --- PASS: TestMigProjectAPIKey_basic (15.41s)
```
### 2025-07-03
#### PASS 25 seconds
```
2025-07-03T00:31:32.1131814Z === RUN   TestMigProjectAPIKey_basic
2025-07-03T00:31:32.1133429Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-3216379905453120451
2025-07-03T00:31:32.1149218Z === CONT  TestMigProjectAPIKey_basic
2025-07-03T00:31:32.1163203Z --- PASS: TestMigProjectAPIKey_basic (25.78s)
```
### 2025-07-04
#### PASS 18 seconds
```
2025-07-04T00:30:47.2507043Z === RUN   TestMigProjectAPIKey_basic
2025-07-04T00:30:47.2508324Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-3520068538826249048
2025-07-04T00:30:47.2518104Z === CONT  TestMigProjectAPIKey_basic
2025-07-04T00:30:47.2538820Z --- PASS: TestMigProjectAPIKey_basic (18.75s)
```
### 2025-07-05
#### PASS 31 seconds
```
2025-07-05T00:30:14.7934000Z === RUN   TestMigProjectAPIKey_basic
2025-07-05T00:30:14.7935146Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-7603170313206652442
2025-07-05T00:30:14.7945094Z === CONT  TestMigProjectAPIKey_basic
2025-07-05T00:30:14.7958114Z --- PASS: TestMigProjectAPIKey_basic (31.19s)
```
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
```
2025-07-07T00:33:18.3671575Z === RUN   TestMigProjectAPIKey_basic
2025-07-07T00:33:18.3672636Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-6705584645326280294
2025-07-07T00:33:18.3686618Z === CONT  TestMigProjectAPIKey_basic
2025-07-07T00:33:18.3730692Z --- PASS: TestMigProjectAPIKey_basic (16.09s)
```
### 2025-07-08
#### PASS 29 seconds
```
2025-07-08T00:31:37.4378456Z === RUN   TestMigProjectAPIKey_basic
2025-07-08T00:31:37.4379652Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-1767244181662156392
2025-07-08T00:31:37.4391353Z === CONT  TestMigProjectAPIKey_basic
2025-07-08T00:31:37.4414472Z --- PASS: TestMigProjectAPIKey_basic (29.38s)
```