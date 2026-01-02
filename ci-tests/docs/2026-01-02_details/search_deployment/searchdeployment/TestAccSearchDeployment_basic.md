# search_deployment/searchdeployment/TestAccSearchDeployment_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-12-04 to 2026-01-02 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-12-11 00:31](#error-2025-12-11t0031130000) |  | dev | timeout | 11592.09s

### Timeline
- 2025-12-03: MISSING
- 2025-12-04 PASS an hour
- 2025-12-05 PASS 2 hours
- 2025-12-06 PASS 38 minutes
- 2025-12-07: MISSING
- 2025-12-08 PASS 38 minutes
- 2025-12-09 PASS 40 minutes
- 2025-12-10
  - PASS 43 minutes
  - PASS 37 minutes
- 2025-12-11

### Error 2025-12-11T00:31:13+00:00
```
2025-12-11T00:31:13.8155750Z === RUN   TestAccSearchDeployment_basic
2025-12-11T00:31:22.0220882Z === CONT  TestAccSearchDeployment_basic
2025-12-11T03:41:57.6188477Z === NAME  TestAccSearchDeployment_basic
2025-12-11T03:41:57.6191508Z     resource_test.go:39: Step 1/4 error: Error running apply: exit status 1
2025-12-11T03:41:57.6192028Z         
2025-12-11T03:41:57.6192489Z         Error: error during search deployment creation
2025-12-11T03:41:57.6192922Z         
2025-12-11T03:41:57.6193394Z           with mongodbatlas_search_deployment.test,
2025-12-11T03:41:57.6194363Z           on terraform_plugin_test.tf line 45, in resource "mongodbatlas_search_deployment" "test":
2025-12-11T03:41:57.6195495Z           45: 		resource "mongodbatlas_search_deployment" "test" {
2025-12-11T03:41:57.6195954Z         
2025-12-11T03:41:57.6196572Z         timeout while waiting for state to become 'IDLE' (last state: 'UPDATING',
2025-12-11T03:41:57.6197093Z         timeout: 3h0m0s)
2025-12-11T03:41:57.6197581Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-12-11T03:41:57.6198453Z         transient error, wait before retrying to allow resource deletion to finish
2025-12-11T03:42:28.1398960Z   diagnostic_detail=
2025-12-11T03:42:28.1403072Z    diagnostic_severity=ERROR diagnostic_summary="error during search deployment creation" tf_proto_version=6.10 tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_search_deployment
2025-12-11T03:42:28.1457386Z   
2025-12-11T03:44:30.2937036Z --- FAIL: TestAccSearchDeployment_basic (11592.91s)
```

- 2025-12-12 PASS 43 minutes
- 2025-12-13 PASS 39 minutes
- 2025-12-14: MISSING
- 2025-12-15 PASS 39 minutes
- 2025-12-16 PASS 36 minutes
- 2025-12-17 PASS 41 minutes
- 2025-12-18 PASS 41 minutes
- 2025-12-19 PASS 43 minutes
- 2025-12-20 PASS 35 minutes
- 2025-12-21: MISSING
- 2025-12-22 PASS 41 minutes
- 2025-12-23 PASS 37 minutes
- 2025-12-24 PASS 41 minutes
- 2025-12-25 PASS 54 minutes
- 2025-12-26 PASS 36 minutes
- 2025-12-27 PASS 35 minutes
- 2025-12-28: MISSING
- 2025-12-29: MISSING
- 2025-12-30 PASS 36 minutes
- 2025-12-31 PASS 41 minutes
- 2026-01-01 PASS 33 minutes
- 2026-01-02 PASS 40 minutes

## QA Environment
### Timeline
- 2025-12-03: MISSING
- 2025-12-04: MISSING
- 2025-12-05: MISSING
- 2025-12-06: MISSING
- 2025-12-07 PASS 37 minutes
- 2025-12-08: MISSING
- 2025-12-09 PASS 36 minutes
- 2025-12-10: MISSING
- 2025-12-11: MISSING
- 2025-12-12: MISSING
- 2025-12-13: MISSING
- 2025-12-14 PASS 40 minutes
- 2025-12-15: MISSING
- 2025-12-16: MISSING
- 2025-12-17: MISSING
- 2025-12-18: MISSING
- 2025-12-19: MISSING
- 2025-12-20: MISSING
- 2025-12-21 PASS 35 minutes
- 2025-12-22: MISSING
- 2025-12-23: MISSING
- 2025-12-24: MISSING
- 2025-12-25: MISSING
- 2025-12-26: MISSING
- 2025-12-27: MISSING
- 2025-12-28 PASS 36 minutes
- 2025-12-29: MISSING
- 2025-12-30: MISSING
- 2025-12-31: MISSING
- 2026-01-01: MISSING
- 2026-01-02: MISSING
