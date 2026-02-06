# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 4)
Success rate: 87.88%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-16 00:32](#error-2026-01-16t0032470000) | CheckFailure for advanced_clusters.test at Step: 2 Checks: 19,20,21,22,23,24 | dev |  | 2294.02s
[2026-01-31 00:35](#error-2026-01-31t0035180000) |  | dev | timeout | 10805.02s
[2026-02-02 00:38](#error-2026-02-02t0038460000) |  | dev | timeout | 10807.00s
[2026-02-03 00:39](#error-2026-02-03t0039280000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143beb2e54ee995907df2/clusters | dev | out_of_capacity | 5.07s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 41 minutes
- 2026-01-09 PASS 52 minutes
- 2026-01-10 PASS 51 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 50 minutes
- 2026-01-13 PASS 52 minutes
- 2026-01-14 PASS 47 minutes
- 2026-01-15 PASS 53 minutes
- 2026-01-16

### Error 2026-01-16T00:32:47+00:00
```
2026-01-16T00:32:47.1250071Z === RUN   TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-16T00:34:41.3007094Z === CONT  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-16T01:07:49.4356712Z === NAME  TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs
2026-01-16T01:07:49.4357753Z     effective_fields_test.go:289: Step 2/6 error: Check failed: Check 19/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.#' expected to be set
2026-01-16T01:07:49.4359281Z         Check 20/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.instance_size' expected to be set
2026-01-16T01:07:49.4360854Z         Check 21/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.node_count' expected to be set
2026-01-16T01:07:49.4362434Z         Check 22/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_size_gb' expected to be set
2026-01-16T01:07:49.4363986Z         Check 23/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.disk_iops' expected to be set
2026-01-16T01:07:49.4365756Z         Check 24/31 error: data.mongodbatlas_advanced_clusters.test: Attribute 'results.0.replication_specs.0.region_configs.0.effective_electable_specs.ebs_volume_type' expected to be set
2026-01-16T01:12:55.4880757Z --- FAIL: TestAccAdvancedCluster_effectiveToggleFlagWithRemovedSpecs (2294.20s)
```

- 2026-01-17 PASS 52 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 49 minutes
- 2026-01-20 PASS 48 minutes
- 2026-01-21 PASS 53 minutes
- 2026-01-22 PASS 50 minutes
- 2026-01-23 PASS 47 minutes
- 2026-01-24 PASS 41 minutes
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

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 45 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 44 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 45 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 36 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 44 minutes
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
