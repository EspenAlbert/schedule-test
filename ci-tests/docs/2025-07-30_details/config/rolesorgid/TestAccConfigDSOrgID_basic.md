# config/rolesorgid/TestAccConfigDSOrgID_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-06 00:34](#error-2025-07-06t0034000000) |  | qa | flaky_500 | 0.03s
[2025-07-10 13:09](#error-2025-07-10t1309210000) |  | qa | flaky_500 | 0.05s
[2025-07-13 00:34](#error-2025-07-13t0034200000) |  | qa | flaky_500 | 0.03s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS 3 seconds
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS a second
- 2025-07-04 PASS a second
- 2025-07-05 PASS a second
- 2025-07-06

### Error 2025-07-06T00:34:00+00:00
```
2025-07-06T00:34:00.3054733Z === RUN   TestAccConfigDSOrgID_basic
2025-07-06T00:34:00.3055844Z === CONT  TestAccConfigDSOrgID_basic
2025-07-06T00:34:00.3069027Z    test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/f4a4173d-86e1-4089-95dd-38ad7426626e/terraform
2025-07-06T00:34:00.3070401Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-06T00:34:00.3071076Z         
2025-07-06T00:34:00.3072280Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-07-06T00:34:00.3073190Z         
2025-07-06T00:34:00.3073766Z           with data.mongodbatlas_roles_org_id.test,
2025-07-06T00:34:00.3074838Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-07-06T00:34:00.3075947Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-07-06T00:34:00.3076444Z         
2025-07-06T00:34:00.3076829Z --- FAIL: TestAccConfigDSOrgID_basic (0.32s)
```

- 2025-07-07 PASS a second
- 2025-07-08 PASS a second
- 2025-07-09 PASS a second
- 2025-07-10
  - PASS a second
  - FAIL a moment

### Error 2025-07-10T13:09:21+00:00
GoTestErrorClassification(error_class='flaky_500',author='human',run_id='2025-07-10T13:09:21.220000+00:00-TestAccConfigDSOrgID_basic',confidence=1.0,ts_when='19 days ago')

```
2025-07-10T13:09:21.2206134Z === RUN   TestAccConfigDSOrgID_basic
2025-07-10T13:09:21.2206811Z === CONT  TestAccConfigDSOrgID_basic
2025-07-10T13:09:21.2214889Z   
2025-07-10T13:09:21.2215344Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-10T13:09:21.2215766Z         
2025-07-10T13:09:21.2216569Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-07-10T13:09:21.2217091Z         
2025-07-10T13:09:21.2217411Z           with data.mongodbatlas_roles_org_id.test,
2025-07-10T13:09:21.2218009Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-07-10T13:09:21.2218543Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-07-10T13:09:21.2218820Z         
2025-07-10T13:09:21.2219038Z --- FAIL: TestAccConfigDSOrgID_basic (0.47s)
```

- 2025-07-11 PASS a second
- 2025-07-12 PASS a second
- 2025-07-13

### Error 2025-07-13T00:34:20+00:00
```
2025-07-13T00:34:20.8323904Z === RUN   TestAccConfigDSOrgID_basic
2025-07-13T00:34:20.8324464Z === CONT  TestAccConfigDSOrgID_basic
2025-07-13T00:34:20.8332156Z    test_working_directory=/tmp/plugintest2879054016 test_step_number=1 test_name=TestAccConfigDSOrgID_basic test_terraform_path=/home/runner/work/_temp/6eb9759b-51ab-473e-abca-270c6d0714e5/terraform
2025-07-13T00:34:20.8333178Z     data_source_roles_org_id_test.go:15: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-07-13T00:34:20.8333596Z         
2025-07-13T00:34:20.8334298Z         Error: error getting API Key's org assigned ((503 Service Unavailable) failed to decode response body: undefined response type): 
2025-07-13T00:34:20.8334944Z         
2025-07-13T00:34:20.8335279Z           with data.mongodbatlas_roles_org_id.test,
2025-07-13T00:34:20.8335882Z           on terraform_plugin_test.tf line 11, in data "mongodbatlas_roles_org_id" "test":
2025-07-13T00:34:20.8336416Z           11: data "mongodbatlas_roles_org_id" "test" {}
2025-07-13T00:34:20.8336699Z         
2025-07-13T00:34:20.8336931Z --- FAIL: TestAccConfigDSOrgID_basic (0.32s)
```

- 2025-07-14 PASS a second
- 2025-07-15 PASS a second
- 2025-07-16 PASS a second
- 2025-07-17 PASS a second
- 2025-07-18 PASS a moment
- 2025-07-19 PASS a second
- 2025-07-20 PASS a second
- 2025-07-21 PASS a second
- 2025-07-22 PASS a second
- 2025-07-23
  - PASS a moment
  - PASS a moment
  - PASS a second
- 2025-07-24 PASS a second
- 2025-07-25 PASS a moment
- 2025-07-26 PASS a second
- 2025-07-27 PASS a second
- 2025-07-28 PASS 2 seconds
- 2025-07-29 PASS a second
- 2025-07-30 PASS a moment