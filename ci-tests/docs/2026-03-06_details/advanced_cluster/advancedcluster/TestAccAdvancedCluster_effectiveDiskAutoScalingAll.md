# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveDiskAutoScalingAll Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1177.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 17 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 18 minutes
- 2026-02-10 PASS 19 minutes
- 2026-02-11 PASS 18 minutes
- 2026-02-12 PASS 17 minutes
- 2026-02-13 PASS 21 minutes
- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 21 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 21 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5618253Z === RUN   TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-24T00:40:00.6210978Z === CONT  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-24T00:55:59.8570279Z === NAME  TestAccAdvancedCluster_effectiveDiskAutoScalingAll
2026-02-24T00:55:59.8571875Z     effective_fields_test.go:149: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2026-02-24T00:55:59.8573173Z         
2026-02-24T00:55:59.8573926Z         Error: error reading Advanced Configuration
2026-02-24T00:55:59.8574462Z         
2026-02-24T00:55:59.8575317Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:55:59.8577397Z           on terraform_plugin_test.tf line 50, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:55:59.8578916Z           50: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:55:59.8579681Z         
2026-02-24T00:55:59.8580635Z         cluster name: test-acc-tf-c-1188194062925392527, API error details: (503
2026-02-24T00:55:59.8582230Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T00:59:38.3517774Z --- FAIL: TestAccAdvancedCluster_effectiveDiskAutoScalingAll (1177.74s)
```

- 2026-02-25 PASS 21 minutes
- 2026-02-26 PASS 30 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 18 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 17 minutes
  - PASS 17 minutes
- 2026-03-03 PASS 23 minutes
- 2026-03-04 PASS 19 minutes
- 2026-03-05 PASS 32 minutes
- 2026-03-06 PASS 22 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 16 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 23 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 15 minutes
  - PASS 14 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 22 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 28 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 18 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
