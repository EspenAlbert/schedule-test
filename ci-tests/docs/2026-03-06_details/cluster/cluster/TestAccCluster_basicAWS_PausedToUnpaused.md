# cluster/cluster/TestAccCluster_basicAWS_PausedToUnpaused Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037020000) |  | dev | flaky_500 | 1121.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 28 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 22 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 27 minutes
- 2026-02-10 PASS 23 minutes
- 2026-02-11 PASS 24 minutes
- 2026-02-12 PASS 24 minutes
- 2026-02-13 PASS 28 minutes
- 2026-02-14 PASS 22 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 24 minutes
- 2026-02-17 PASS 23 minutes
- 2026-02-18 PASS 26 minutes
- 2026-02-19 PASS 41 minutes
- 2026-02-20 PASS 25 minutes
- 2026-02-21 PASS 22 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 25 minutes
- 2026-02-24

### Error 2026-02-24T00:37:02+00:00
```
2026-02-24T00:37:02.7157417Z === RUN   TestAccCluster_basicAWS_PausedToUnpaused
2026-02-24T00:37:02.7260932Z === CONT  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-24T00:37:37.7274721Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-24T00:37:37.7276618Z     pre_check.go:46: Time before creating cluster: 2026-02-24T00:37:37.727234232Z, ProjectID: 699cf2abae2412ce6211afd6, Cluster name: test-acc-tf-c-8850098365259917144
2026-02-24T00:51:49.7778906Z === NAME  TestAccCluster_basicAWS_PausedToUnpaused
2026-02-24T00:51:49.7779686Z     resource_cluster_test.go:1261: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:51:49.7780250Z         
2026-02-24T00:51:49.7781444Z         Error: error reading Advanced Configuration Option  for MongoDB Cluster (test-acc-tf-c-8850098365259917144): (503 Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:51:49.7782333Z         
2026-02-24T00:51:49.7782742Z           with mongodbatlas_cluster.test,
2026-02-24T00:51:49.7783399Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2026-02-24T00:51:49.7784304Z           12: resource "mongodbatlas_cluster" "test" {
2026-02-24T00:51:49.7784639Z         
2026-02-24T00:51:54.7047840Z    test_terraform_path=/home/runner/work/_temp/5202aa85-26bc-4031-8145-a87a186217d7/terraform test_working_directory=/tmp/plugintest1450448059 test_step_number=1
2026-02-24T00:55:44.3071245Z --- FAIL: TestAccCluster_basicAWS_PausedToUnpaused (1121.58s)
```

- 2026-02-25 PASS 26 minutes
- 2026-02-26 PASS 34 minutes
- 2026-02-27 PASS 27 minutes
- 2026-02-28 PASS 24 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 23 minutes
- 2026-03-03 PASS 29 minutes
- 2026-03-04 PASS 25 minutes
- 2026-03-05 PASS 36 minutes
- 2026-03-06 PASS 29 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 23 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 27 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 30 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 26 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 27 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 32 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 27 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
