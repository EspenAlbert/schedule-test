# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveBasic Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036570000) |  | dev | flaky_500 | 1238.08s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 22 minutes
- 2026-02-06 PASS 20 minutes
- 2026-02-07 PASS 17 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 20 minutes
- 2026-02-10 PASS 17 minutes
- 2026-02-11 PASS 17 minutes
- 2026-02-12 PASS 16 minutes
- 2026-02-13 PASS 18 minutes
- 2026-02-14 PASS 17 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 20 minutes
- 2026-02-17 PASS 18 minutes
- 2026-02-18 PASS 22 minutes
- 2026-02-19 PASS 27 minutes
- 2026-02-20 PASS 22 minutes
- 2026-02-21 PASS 15 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 19 minutes
- 2026-02-24

### Error 2026-02-24T00:36:57+00:00
```
2026-02-24T00:36:57.4931677Z === RUN   TestAccAdvancedCluster_effectiveBasic
2026-02-24T00:40:00.5453455Z === CONT  TestAccAdvancedCluster_effectiveBasic
2026-02-24T00:57:33.0976966Z === NAME  TestAccAdvancedCluster_effectiveBasic
2026-02-24T00:57:33.0978137Z     effective_fields_test.go:16: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2026-02-24T00:57:33.0978960Z         
2026-02-24T00:57:33.0979289Z         Error: error reading advanced cluster list
2026-02-24T00:57:33.0979719Z         
2026-02-24T00:57:33.0980094Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:33.0980977Z           on terraform_plugin_test.tf line 45, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:33.0981719Z           45: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:33.0982246Z         
2026-02-24T00:57:33.0983034Z         project ID 699cf2a9ae2412ce6211a607. Error (503 Service Unavailable) failed
2026-02-24T00:57:33.0983984Z         to decode response body: undefined response type
2026-02-24T00:57:33.1477526Z   
2026-02-24T01:00:37.2626224Z --- FAIL: TestAccAdvancedCluster_effectiveBasic (1238.79s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 29 minutes
- 2026-02-27 PASS 20 minutes
- 2026-02-28 PASS 16 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 16 minutes
  - PASS 18 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 17 minutes
- 2026-03-05 PASS 21 minutes
- 2026-03-06 PASS 24 minutes

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
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 18 minutes
  - PASS 12 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 16 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 20 minutes
- 2026-03-02 PASS 14 minutes
- 2026-03-03 PASS 15 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
