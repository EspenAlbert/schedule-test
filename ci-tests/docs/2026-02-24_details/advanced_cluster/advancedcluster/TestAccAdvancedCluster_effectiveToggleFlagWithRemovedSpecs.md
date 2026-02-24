# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 33 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 00:35](#error-2026-01-31t0035180000) |  | dev | timeout | 10805.02s
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10807.00s
[2026-02-03 00:39](#error-2026-02-03t0039280000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143beb2e54ee995907df2/clusters | dev | out_of_capacity | 5.07s
[2026-02-24 00:37](#error-2026-02-24t0037040000) |  | dev | flaky_500 | 1486.06s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 44 minutes
- 2026-01-27 PASS 56 minutes
- 2026-01-28 PASS 48 minutes
- 2026-01-29 PASS 57 minutes
- 2026-01-30 PASS an hour
- 2026-01-31

### Error 2026-01-31T00:35:18+00:00
```
2026-01-31T00:35:18.6267841Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-31T00:36:56.2145265Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-31T03:37:01.3246022Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-31T03:37:01.3247161Z     effective_fields_test.go:289: Step 1/6 error: Error running apply: exit status 1
2026-01-31T03:37:01.3248225Z         
2026-01-31T03:37:01.3248704Z         Error: Error in create
2026-01-31T03:37:01.3249145Z         
2026-01-31T03:37:01.3249717Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T03:37:01.3250953Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T03:37:01.3252111Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T03:37:01.3252680Z         
2026-01-31T03:37:01.3253487Z         cluster=test-acc-tf-c-7352477762258495844 didn't reach desired state: IDLE,
2026-01-31T03:37:01.3268492Z         error: context deadline exceeded
2026-01-31T03:37:01.3630324Z   
2026-01-31T03:37:01.4162477Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (10805.19s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:46+00:00
```
2026-02-02T00:38:46.2845098Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-02T00:40:19.9081414Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-02T03:40:26.7649041Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-02T03:40:26.7650516Z     effective_fields_test.go:289: Step 1/6 error: Error running apply: exit status 1
2026-02-02T03:40:26.7651533Z         
2026-02-02T03:40:26.7656159Z         Error: Error in create
2026-02-02T03:40:26.7658694Z         
2026-02-02T03:40:26.7659877Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.7664938Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.7684493Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.7685213Z         
2026-02-02T03:40:26.7686047Z         cluster=test-acc-tf-c-420640740300253224 didn't reach desired state: IDLE,
2026-02-02T03:40:26.7686898Z         error: context deadline exceeded
2026-02-02T03:40:26.7696686Z    test_name=TestAccAdvancedCluster_tls13CustomCiphers
2026-02-02T03:40:26.9448576Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (10807.04s)
```

- 2026-02-03

### Error 2026-02-03T00:39:28+00:00
```
2026-02-03T00:39:28.9657213Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-03T00:42:03.6231612Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-03T00:42:09.1436665Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-03T00:42:09.1438133Z     effective_fields_test.go:289: Step 1/6 error: Error running apply: exit status 1
2026-02-03T00:42:09.1438851Z         
2026-02-03T00:42:09.1439348Z         Error: Error in create
2026-02-03T00:42:09.1439770Z         
2026-02-03T00:42:09.1440288Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.1441359Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.1442327Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.1442800Z         
2026-02-03T00:42:09.1443526Z         cluster name: test-acc-tf-c-2150751830552287069, API error details:
2026-02-03T00:42:09.1444552Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143beb2e54ee995907df2/clusters
2026-02-03T00:42:09.1445685Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.1446929Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.1447829Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.2701573Z   
2026-02-03T00:42:09.3184301Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (5.69s)
```

- 2026-02-04 PASS 47 minutes
- 2026-02-05 PASS an hour
- 2026-02-06 PASS 52 minutes
- 2026-02-07 PASS 49 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 52 minutes
- 2026-02-10 PASS 59 minutes
- 2026-02-11 PASS 48 minutes
- 2026-02-12 PASS 57 minutes
- 2026-02-13 PASS 48 minutes
- 2026-02-14 PASS 53 minutes
- 2026-02-15: MISSING
- 2026-02-16 PASS 50 minutes
- 2026-02-17 PASS 53 minutes
- 2026-02-18 PASS 50 minutes
- 2026-02-19 PASS an hour
- 2026-02-20 PASS 52 minutes
- 2026-02-21 PASS 53 minutes
- 2026-02-22: MISSING
- 2026-02-23 PASS 49 minutes
- 2026-02-24

### Error 2026-02-24T00:37:04+00:00
```
2026-02-24T00:37:04.0522649Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-24T00:40:00.6168932Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-24T01:01:13.4004591Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-02-24T01:01:13.4005401Z     effective_fields_test.go:289: Step 2/6 error: Error running apply: exit status 1
2026-02-24T01:01:13.4005937Z         
2026-02-24T01:01:13.4006208Z         Error: Error in update
2026-02-24T01:01:13.4006567Z         
2026-02-24T01:01:13.4006912Z           with mongodbatlas_advanced_cluster.test,
2026-02-24T01:01:13.4007762Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-24T01:01:13.4008609Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-24T01:01:13.4008939Z         
2026-02-24T01:01:13.4009430Z         cluster name: test-acc-tf-c-6890318181181703781, API error details: (503
2026-02-24T01:01:13.4010109Z         Service Unavailable) failed to decode response body: undefined response type
2026-02-24T01:04:47.1400005Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (1486.55s)
```


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 53 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 45 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 43 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 49 minutes
- 2026-02-16: MISSING
- 2026-02-17
  - PASS 38 minutes
  - PASS 38 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 43 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
