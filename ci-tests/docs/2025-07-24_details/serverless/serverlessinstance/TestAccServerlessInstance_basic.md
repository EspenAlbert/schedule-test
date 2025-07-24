# serverless/serverlessinstance/TestAccServerlessInstance_basic Test Details
# Found 37 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 36) FAIL
Success rate: 97.30%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-14 00:51](#error-2025-07-14t0051360000) |  | dev | 1200.07s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 4 minutes
- 2025-06-26 PASS 4 minutes
- 2025-06-27 PASS 4 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29 PASS 4 minutes
- 2025-06-30 PASS 4 minutes
- 2025-07-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 4 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 4 minutes
- 2025-07-08 PASS 4 minutes
- 2025-07-09 PASS 4 minutes
- 2025-07-10
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-11 PASS 4 minutes
- 2025-07-12 PASS 4 minutes
- 2025-07-13 PASS 4 minutes
- 2025-07-14

### Error 2025-07-14T00:51:36+00:00
```
2025-07-14T00:51:36.3411197Z === RUN   TestAccServerlessInstance_basic
2025-07-14T00:51:36.3416301Z === CONT  TestAccServerlessInstance_basic
2025-07-14T00:51:36.3436063Z   
2025-07-14T00:51:36.3437169Z     resource_serverless_instance_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-14T00:51:36.3437928Z         
2025-07-14T00:51:36.3443364Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-07-14T00:51:36.3444068Z         
2025-07-14T00:51:36.3444661Z           with mongodbatlas_serverless_instance.test,
2025-07-14T00:51:36.3445825Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-07-14T00:51:36.3446896Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-07-14T00:51:36.3447436Z         
2025-07-14T00:51:36.3460641Z    test_step_number=1 test_working_directory=/tmp/plugintest2256425191 test_terraform_path=/home/runner/work/_temp/5f722772-acdc-4678-aedd-7b54709050ac/terraform
2025-07-14T00:51:36.3484704Z --- FAIL: TestAccServerlessInstance_basic (1200.66s)
```

- 2025-07-15 PASS 4 minutes
- 2025-07-16 PASS 4 minutes
- 2025-07-17 PASS 4 minutes
- 2025-07-18 PASS 4 minutes
- 2025-07-19 PASS 4 minutes
- 2025-07-20 PASS 4 minutes
- 2025-07-21 PASS 4 minutes
- 2025-07-22 PASS 4 minutes
- 2025-07-23
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-24 PASS 4 minutes