# cluster/cluster/TestAccCluster_basicAWS_simple Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036530000) | Step 1 1 | dev | flaky_500 | 1012.09s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 21 minutes
- 2026-02-06 PASS 20 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 25 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 21 minutes
- 2026-02-13 PASS 23 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 22 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 19 minutes
- 2026-02-19 PASS 34 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 21 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:36:53+00:00
```
2026-02-24T00:36:53.0847024Z === RUN   TestAccCluster_basicAWS_simple
2026-02-24T00:37:02.7162749Z === CONT  TestAccCluster_basicAWS_simple
2026-02-24T00:37:07.7178066Z === NAME  TestAccCluster_basicAWS_simple
2026-02-24T00:37:07.7179452Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:07.717519208Z, ProjectID: 699cf2a5ae2412ce62117913, Cluster name: test-acc-tf-c-6766245648344357440
2026-02-24T00:50:43.1355391Z === NAME  TestAccCluster_basicAWS_simple
2026-02-24T00:50:43.1357753Z     resource_cluster_test.go:28: Step 1/3 error: Check failed: Check 1/16 error: cluster(699cf2a5ae2412ce62117913:test-acc-tf-c-6766245648344357440) does not exist: (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:51:49.7777690Z    test_name=TestAccCluster_basicAWS_PausedToUnpaused test_terraform_path=/home/runner/work/_temp/5202aa85-26bc-4031-8145-a87a186217d7/terraform test_working_directory=/tmp/plugintest2304670775 test_step_number=1
2026-02-24T00:53:52.8771719Z --- FAIL: TestAccCluster_basicAWS_simple (1012.87s)
```

- 2026-02-25 PASS 19 minutes
- 2026-02-26 PASS 21 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 19 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 20 minutes
- 2026-03-03 PASS 25 minutes
- 2026-03-04 PASS 21 minutes
- 2026-03-05 PASS 25 minutes
- 2026-03-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 15 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 23 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 23 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 22 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 18 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 21 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 17 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
