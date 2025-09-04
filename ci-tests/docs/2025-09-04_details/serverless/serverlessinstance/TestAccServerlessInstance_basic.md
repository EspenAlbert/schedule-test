# serverless/serverlessinstance/TestAccServerlessInstance_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:50](#error-2025-09-01t0050460000) |  | dev | 1200.05s
[2025-09-01 06:27](#error-2025-09-01t0627580000) |  | dev | 1388.01s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 minutes
- 2025-08-07 PASS 6 minutes
- 2025-08-08 PASS 4 minutes
- 2025-08-09 PASS 4 minutes
- 2025-08-10 PASS 4 minutes
- 2025-08-11 PASS 4 minutes
- 2025-08-12 PASS 4 minutes
- 2025-08-13 PASS 4 minutes
- 2025-08-14 PASS 4 minutes
- 2025-08-15 PASS 4 minutes
- 2025-08-16 PASS 4 minutes
- 2025-08-17 PASS 4 minutes
- 2025-08-18 PASS 4 minutes
- 2025-08-19 PASS 4 minutes
- 2025-08-20
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-08-21 PASS 4 minutes
- 2025-08-22 PASS 4 minutes
- 2025-08-23 PASS 4 minutes
- 2025-08-24 PASS 4 minutes
- 2025-08-25 PASS 4 minutes
- 2025-08-26 PASS 4 minutes
- 2025-08-27 PASS 4 minutes
- 2025-08-28 PASS 4 minutes
- 2025-08-29 PASS 8 minutes
- 2025-08-30 PASS 4 minutes
- 2025-08-31 PASS 4 minutes
- 2025-09-01
  - FAIL 20 minutes

### Error 2025-09-01T00:50:46+00:00
```
2025-09-01T00:50:46.6780310Z === RUN   TestAccServerlessInstance_basic
2025-09-01T00:50:46.6785473Z === CONT  TestAccServerlessInstance_basic
2025-09-01T00:50:46.6795337Z   
2025-09-01T00:50:46.6796096Z     resource_serverless_instance_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:50:46.6796909Z         
2025-09-01T00:50:46.6797540Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-09-01T00:50:46.6797926Z         
2025-09-01T00:50:46.6798268Z           with mongodbatlas_serverless_instance.test,
2025-09-01T00:50:46.6799140Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-09-01T00:50:46.6799744Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-09-01T00:50:46.6800047Z         
2025-09-01T00:50:46.6807973Z    test_step_number=1 test_name=TestAccServerlessInstance_autoIndexing test_terraform_path=/home/runner/work/_temp/232716c9-e495-4c32-a21e-b73e6714ff55/terraform test_working_directory=/tmp/plugintest4148804600
2025-09-01T00:50:46.6829102Z --- FAIL: TestAccServerlessInstance_basic (1200.54s)
```

  - FAIL 23 minutes

### Error 2025-09-01T06:27:58+00:00
```
2025-09-01T06:27:58.5031001Z === RUN   TestAccServerlessInstance_basic
2025-09-01T06:27:58.5035788Z === CONT  TestAccServerlessInstance_basic
2025-09-01T06:27:58.5049639Z === NAME  TestAccServerlessInstance_basic
2025-09-01T06:27:58.5050871Z     resource_serverless_instance_test.go:22: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T06:27:58.5052058Z         
2025-09-01T06:27:58.5053215Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-4241418320794269232): context deadline exceeded
2025-09-01T06:27:58.5054094Z         
2025-09-01T06:27:58.5054504Z --- FAIL: TestAccServerlessInstance_basic (1388.12s)
```

  - PASS 5 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-09-02 PASS 4 minutes
- 2025-09-03 PASS 4 minutes
- 2025-09-04 PASS 4 minutes