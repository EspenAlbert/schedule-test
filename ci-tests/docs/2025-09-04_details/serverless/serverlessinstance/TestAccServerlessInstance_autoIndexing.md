# serverless/serverlessinstance/TestAccServerlessInstance_autoIndexing Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 2)
Success rate: 94.74%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:50](#error-2025-09-01t0050460000) |  | dev | 1200.06s
[2025-09-01 06:27](#error-2025-09-01t0627580000) |  | dev | 1391.05s

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
2025-09-01T00:50:46.6782333Z === RUN   TestAccServerlessInstance_autoIndexing
2025-09-01T00:50:46.6784881Z === CONT  TestAccServerlessInstance_autoIndexing
2025-09-01T00:50:46.6808821Z === NAME  TestAccServerlessInstance_autoIndexing
2025-09-01T00:50:46.6809382Z     resource_serverless_instance_test.go:99: Step 1/2 error: Error running apply: exit status 1
2025-09-01T00:50:46.6809796Z         
2025-09-01T00:50:46.6810246Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-09-01T00:50:46.6810617Z         
2025-09-01T00:50:46.6810946Z           with mongodbatlas_serverless_instance.test,
2025-09-01T00:50:46.6811584Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-09-01T00:50:46.6812186Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-09-01T00:50:46.6812494Z         
2025-09-01T00:50:46.6829483Z --- FAIL: TestAccServerlessInstance_autoIndexing (1200.58s)
```

  - FAIL 23 minutes

### Error 2025-09-01T06:27:58+00:00
```
2025-09-01T06:27:58.5033466Z === RUN   TestAccServerlessInstance_autoIndexing
2025-09-01T06:27:58.5036364Z === CONT  TestAccServerlessInstance_autoIndexing
2025-09-01T06:27:58.5048227Z    test_terraform_path=/home/runner/work/_temp/3e27c70f-47cd-4621-9b52-05b8a46f2e06/terraform test_name=TestAccServerlessInstance_basic test_working_directory=/tmp/plugintest2353439451
2025-09-01T06:27:58.5068308Z === NAME  TestAccServerlessInstance_autoIndexing
2025-09-01T06:27:58.5069566Z     resource_serverless_instance_test.go:99: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T06:27:58.5070481Z         
2025-09-01T06:27:58.5071792Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-6367922122259958715): context deadline exceeded
2025-09-01T06:27:58.5072667Z         
2025-09-01T06:27:58.5073119Z --- FAIL: TestAccServerlessInstance_autoIndexing (1391.50s)
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