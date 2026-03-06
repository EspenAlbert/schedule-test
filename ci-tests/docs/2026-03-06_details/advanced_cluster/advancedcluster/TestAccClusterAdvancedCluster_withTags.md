# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_withTags Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:37](#error-2026-02-24t0037120000) |  | dev | flaky_500 | 1189.06s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 22 minutes
- 2026-02-07 PASS 19 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 21 minutes
- 2026-02-12 PASS 20 minutes
- 2026-02-13 PASS 19 minutes
- 2026-02-14 PASS 21 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 25 minutes
- 2026-02-17 PASS 19 minutes
- 2026-02-18 PASS 24 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 24 minutes
- 2026-02-21 PASS 20 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24

### Error 2026-02-24T00:37:12+00:00
```
2026-02-24T00:37:12.0236964Z === RUN   TestAccClusterAdvancedCluster_withTags
2026-02-24T00:40:00.5694029Z === CONT  TestAccClusterAdvancedCluster_withTags
2026-02-24T00:56:41.9794222Z === NAME  TestAccClusterAdvancedCluster_withTags
2026-02-24T00:56:41.9795111Z     resource_test.go:505: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:56:41.9795568Z         
2026-02-24T00:56:41.9795864Z         Error: error reading advanced cluster
2026-02-24T00:56:41.9796143Z         
2026-02-24T00:56:41.9796660Z           with data.mongodbatlas_advanced_cluster.test,
2026-02-24T00:56:41.9797325Z           on terraform_plugin_test.tf line 41, in data "mongodbatlas_advanced_cluster" "test":
2026-02-24T00:56:41.9798002Z           41: 	data "mongodbatlas_advanced_cluster" "test" {
2026-02-24T00:56:41.9798494Z         
2026-02-24T00:56:41.9798967Z         cluster name: test-acc-tf-c-1020973766680604110, API error details: (503
2026-02-24T00:56:41.9799677Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:00.5907922Z   
2026-02-24T00:59:50.1619567Z --- FAIL: TestAccClusterAdvancedCluster_withTags (1189.60s)
```

- 2026-02-25 PASS 22 minutes
- 2026-02-26 PASS 32 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 29 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 21 minutes
  - PASS 21 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04 PASS 22 minutes
- 2026-03-05 PASS 28 minutes
- 2026-03-06 PASS 24 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 19 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 21 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 23 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
