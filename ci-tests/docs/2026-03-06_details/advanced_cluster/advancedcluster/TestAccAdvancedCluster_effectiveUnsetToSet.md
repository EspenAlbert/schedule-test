# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveUnsetToSet Test Details
# Found 36 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-24 00:36](#error-2026-02-24t0036590000) |  | dev | flaky_500 | 1269.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 24 minutes
- 2026-02-06 PASS 18 minutes
- 2026-02-07 PASS 18 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 21 minutes
- 2026-02-10 PASS 18 minutes
- 2026-02-11 PASS 19 minutes
- 2026-02-12 PASS 18 minutes
- 2026-02-13 PASS 17 minutes
- 2026-02-14 PASS 18 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 21 minutes
- 2026-02-17 PASS 17 minutes
- 2026-02-18 PASS 20 minutes
- 2026-02-19 PASS 23 minutes
- 2026-02-20 PASS 21 minutes
- 2026-02-21 PASS 19 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 20 minutes
- 2026-02-24

### Error 2026-02-24T00:36:59+00:00
```
2026-02-24T00:36:59.5605711Z === RUN   TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-24T00:40:00.6223939Z === CONT  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-24T00:57:00.5908210Z === NAME  TestAccAdvancedCluster_effectiveUnsetToSet
2026-02-24T00:57:00.5909236Z     effective_fields_test.go:36: Step 1/2 error: Error running post-apply non-refresh plan: exit status 1
2026-02-24T00:57:00.5909752Z         
2026-02-24T00:57:00.5910068Z         Error: error resolving container IDs
2026-02-24T00:57:00.5910431Z         
2026-02-24T00:57:00.5910840Z           with data.mongodbatlas_advanced_clusters.test,
2026-02-24T00:57:00.5911687Z           on terraform_plugin_test.tf line 43, in data "mongodbatlas_advanced_clusters" "test":
2026-02-24T00:57:00.5912714Z           43: 		data "mongodbatlas_advanced_clusters" "test" {
2026-02-24T00:57:00.5913048Z         
2026-02-24T00:57:00.5913779Z         cluster name = test-acc-tf-c-4971672503540266852, error details: (503 Service
2026-02-24T00:57:00.5914858Z         Unavailable) failed to decode response body: undefined response type
2026-02-24T00:57:01.5844027Z    test_working_directory=/tmp/plugintest3762949835
2026-02-24T01:01:09.8880165Z --- FAIL: TestAccAdvancedCluster_effectiveUnsetToSet (1269.27s)
```

- 2026-02-25 PASS 20 minutes
- 2026-02-26 PASS 28 minutes
- 2026-02-27 PASS 17 minutes
- 2026-02-28 PASS 16 minutes
- 2026-03-01: MISSING
- 2026-03-02
  - PASS 17 minutes
  - PASS 17 minutes
- 2026-03-03 PASS 22 minutes
- 2026-03-04 PASS 18 minutes
- 2026-03-05 PASS 30 minutes
- 2026-03-06 PASS 19 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 17 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 20 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 22 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 16 minutes
  - PASS 13 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 17 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 22 minutes
- 2026-03-02 PASS 13 minutes
- 2026-03-03 PASS 15 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
