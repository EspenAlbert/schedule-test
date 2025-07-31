# config/projectapikey/TestMigProjectAPIKey_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | flaky_500 | 6.08s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 5.08s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 6.04s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 15 seconds
- 2025-07-03 PASS 25 seconds
- 2025-07-04 PASS 18 seconds
- 2025-07-05 PASS 31 seconds
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
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

- 2025-07-07 PASS 16 seconds
- 2025-07-08 PASS 29 seconds
- 2025-07-09 PASS 29 seconds
- 2025-07-10
  - PASS 15 seconds
  - FAIL 5 seconds

### Error 2025-07-10T13:09:21+00:00
```
2025-07-10T13:09:21.1977988Z === RUN   TestMigProjectAPIKey_basic
2025-07-10T13:09:21.1979336Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-7966740469607269224
2025-07-10T13:09:21.1991947Z === CONT  TestMigProjectAPIKey_basic
2025-07-10T13:09:21.2126011Z === NAME  TestMigProjectAPIKey_basic
2025-07-10T13:09:21.2126691Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:09:21.2127136Z         
2025-07-10T13:09:21.2127645Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2128049Z         
2025-07-10T13:09:21.2128358Z           with mongodbatlas_project_api_key.test,
2025-07-10T13:09:21.2128989Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-07-10T13:09:21.2129564Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-10T13:09:21.2129860Z         
2025-07-10T13:09:21.2133262Z    test_working_directory=/tmp/plugintest1851529654
2025-07-10T13:09:21.2133828Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-10T13:09:21.2134251Z         
2025-07-10T13:09:21.2134749Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-10T13:09:21.2135147Z         
2025-07-10T13:09:21.2135368Z --- FAIL: TestMigProjectAPIKey_basic (5.76s)
```

- 2025-07-11 PASS 22 seconds
- 2025-07-12 PASS 14 seconds
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8058834Z === RUN   TestMigProjectAPIKey_basic
2025-07-13T00:34:20.8059934Z     resource_project_api_key_migration_test.go:10: Creating execution project: test-acc-tf-p-284754395263078483
2025-07-13T00:34:20.8071307Z === CONT  TestMigProjectAPIKey_basic
2025-07-13T00:34:20.8261848Z === NAME  TestMigProjectAPIKey_basic
2025-07-13T00:34:20.8262402Z     resource_project_api_key_migration_test.go:10: Step 1/2 error: Error running apply: exit status 1
2025-07-13T00:34:20.8262829Z         
2025-07-13T00:34:20.8263344Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8263750Z         
2025-07-13T00:34:20.8264068Z           with mongodbatlas_project_api_key.test,
2025-07-13T00:34:20.8264702Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project_api_key" "test":
2025-07-13T00:34:20.8265288Z           14: 		resource "mongodbatlas_project_api_key" "test" {
2025-07-13T00:34:20.8265586Z         
2025-07-13T00:34:20.8268645Z    test_name=TestMigProjectAPIKey_basic test_terraform_path=/home/runner/work/_temp/6eb9759b-51ab-473e-abca-270c6d0714e5/terraform test_working_directory=/tmp/plugintest1793956927 test_step_number=1
2025-07-13T00:34:20.8269886Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-13T00:34:20.8270298Z         
2025-07-13T00:34:20.8270811Z         Error: (503 Service Unavailable) failed to decode response body: undefined response type
2025-07-13T00:34:20.8271211Z         
2025-07-13T00:34:20.8271436Z --- FAIL: TestMigProjectAPIKey_basic (6.35s)
```

- 2025-07-14 PASS 28 seconds
- 2025-07-15 PASS 19 seconds
- 2025-07-16 PASS 20 seconds
- 2025-07-17 PASS 17 seconds
- 2025-07-18 PASS 16 seconds
- 2025-07-19 PASS 15 seconds
- 2025-07-20 PASS 13 seconds
- 2025-07-21 PASS 27 seconds
- 2025-07-22 PASS 20 seconds
- 2025-07-23
  - PASS 15 seconds
  - PASS 15 seconds
  - PASS 26 seconds
- 2025-07-24 PASS 18 seconds
- 2025-07-25 PASS 15 seconds
- 2025-07-26 PASS 17 seconds
- 2025-07-27 PASS 25 seconds
- 2025-07-28 PASS 27 seconds
- 2025-07-29 PASS 17 seconds
- 2025-07-30 PASS 15 seconds
- 2025-07-31 PASS 35 seconds