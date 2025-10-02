# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-05 00:27](#error-2025-09-05t0027290000) |  | dev | timeout | 11857.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 54 minutes
- 2025-09-04 PASS 49 minutes
- 2025-09-05

### Error 2025-09-05T00:27:29+00:00
```
2025-09-05T00:27:29.2832184Z === RUN   TestAccSearchDeployment_basic
2025-09-05T00:27:32.3842033Z === CONT  TestAccSearchDeployment_basic
2025-09-05T03:42:07.5984947Z === NAME  TestAccSearchDeployment_basic
2025-09-05T03:42:07.5985921Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2025-09-05T03:42:07.5986628Z         
2025-09-05T03:42:07.5987276Z         Error: error during search deployment creation
2025-09-05T03:42:07.5987866Z         
2025-09-05T03:42:07.5988819Z           with mongodbatlas_search_deployment.test,
2025-09-05T03:42:07.5990120Z           on terraform_plugin_test.tf line 43, in resource "mongodbatlas_search_deployment" "test":
2025-09-05T03:42:07.5991362Z           43: 		resource "mongodbatlas_search_deployment" "test" {
2025-09-05T03:42:07.5991983Z         
2025-09-05T03:42:07.5992698Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-09-05T03:42:07.5993118Z         timeout: 3h0m0s)
2025-09-05T03:42:07.5993626Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-09-05T03:42:07.5994267Z         transient error, wait before retrying to allow resource deletion to finish
2025-09-05T03:45:09.4615151Z --- FAIL: TestAccSearchDeployment_basic (11857.08s)
```

- 2025-09-06 PASS 52 minutes
- 2025-09-07 PASS 38 minutes
- 2025-09-08
  - PASS 54 minutes
  - PASS 43 minutes
  - PASS 49 minutes
- 2025-09-09 PASS 51 minutes
- 2025-09-10 PASS 46 minutes
- 2025-09-11 PASS 44 minutes
- 2025-09-12 PASS 37 minutes
- 2025-09-13 PASS 41 minutes
- 2025-09-14 PASS 30 minutes
- 2025-09-15
  - PASS 34 minutes
  - PASS 34 minutes
- 2025-09-16 PASS 43 minutes
- 2025-09-17 PASS 39 minutes
- 2025-09-18 PASS 49 minutes
- 2025-09-19 PASS 35 minutes
- 2025-09-20 PASS 48 minutes
- 2025-09-21 PASS 33 minutes
- 2025-09-22 PASS 34 minutes
- 2025-09-23 PASS 37 minutes
- 2025-09-24 PASS 37 minutes
- 2025-09-25 PASS 34 minutes
- 2025-09-26 PASS 37 minutes
- 2025-09-27 PASS 38 minutes
- 2025-09-28 PASS 42 minutes
- 2025-09-29 PASS 46 minutes
- 2025-09-30
  - PASS 38 minutes
  - PASS 37 minutes
  - PASS 35 minutes
- 2025-10-01
  - PASS 38 minutes
  - PASS 53 minutes
  - PASS 36 minutes
  - PASS an hour
  - PASS 37 minutes
  - PASS 33 minutes
  - PASS 33 minutes
  - PASS 32 minutes
- 2025-10-02 PASS an hour