# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 32 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 2)
Success rate: 93.75%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-19 03:55](#error-2025-07-19t0355490000) |  | dev | timeout | 10809.07s
[2025-07-31 03:21](#error-2025-07-31t0321450000) |  | dev | unknown | 8244.09s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 43 minutes
- 2025-07-03 PASS 47 minutes
- 2025-07-04 PASS 46 minutes
- 2025-07-05 PASS 42 minutes
- 2025-07-06 PASS 43 minutes
- 2025-07-07 PASS 40 minutes
- 2025-07-08 PASS an hour
- 2025-07-09 PASS 40 minutes
- 2025-07-10
  - PASS 42 minutes
  - PASS 43 minutes
- 2025-07-11: MISSING
- 2025-07-12 PASS 47 minutes
- 2025-07-13 PASS 49 minutes
- 2025-07-14: MISSING
- 2025-07-15 PASS 45 minutes
- 2025-07-16 PASS 41 minutes
- 2025-07-17 PASS 43 minutes
- 2025-07-18 PASS 43 minutes
- 2025-07-19

### Error 2025-07-19T03:55:49+00:00
```
2025-07-19T03:55:49.0005974Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-19T03:55:49.0020105Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-19T03:55:49.0180336Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-19T03:55:49.0180924Z     resource_advanced_cluster_test.go:1392: Step 1/4 error: Error running apply: exit status 1
2025-07-19T03:55:49.0181358Z         
2025-07-19T03:55:49.0181610Z         Error: Error in create
2025-07-19T03:55:49.0181858Z         
2025-07-19T03:55:49.0182178Z           with mongodbatlas_advanced_cluster.test,
2025-07-19T03:55:49.0182995Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-07-19T03:55:49.0183716Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-07-19T03:55:49.0184033Z         
2025-07-19T03:55:49.0184616Z         cluster=test-acc-tf-c-9161806768966409793 didn't reach desired state: IDLE,
2025-07-19T03:55:49.0185362Z         error: timeout while waiting for state to become 'IDLE' (last state:
2025-07-19T03:55:49.0185814Z         'CREATING', timeout: 3h0m0s)
2025-07-19T03:55:49.0186289Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (10809.72s)
```

- 2025-07-20 PASS an hour
- 2025-07-21 PASS 43 minutes
- 2025-07-22 PASS 41 minutes
- 2025-07-23
  - PASS 42 minutes
  - PASS 49 minutes
  - PASS 48 minutes
  - PASS 54 minutes
- 2025-07-24 PASS 46 minutes
- 2025-07-25 PASS 50 minutes
- 2025-07-26 PASS 51 minutes
- 2025-07-27 PASS 50 minutes
- 2025-07-28 PASS 47 minutes
- 2025-07-29 PASS 53 minutes
- 2025-07-30 PASS 42 minutes
- 2025-07-31

### Error 2025-07-31T03:21:45+00:00
GoTestErrorClassification(error_class='unknown',author='human',run_id='2025-07-31T03:21:45.616000+00:00-TestAccAdvancedCluster_removeBlocksFromConfig',confidence=1.0,ts_when='48 seconds ago')

```
2025-07-31T03:21:45.6164269Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-31T03:21:45.6204119Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-31T03:21:45.6369088Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-07-31T03:21:45.6369674Z     resource_advanced_cluster_test.go:1392: Step 3/4 error: Error running apply: exit status 1
2025-07-31T03:21:45.6370101Z         
2025-07-31T03:21:45.6370696Z         Error: Provider produced inconsistent result after apply
2025-07-31T03:21:45.6371025Z         
2025-07-31T03:21:45.6371451Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-07-31T03:21:45.6372060Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-07-31T03:21:45.6372479Z         unexpected new value:
2025-07-31T03:21:45.6372973Z         .replication_specs[1].region_configs[0].analytics_specs.instance_size: was
2025-07-31T03:21:45.6373519Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-07-31T03:21:45.6373820Z         
2025-07-31T03:21:45.6374259Z         This is a bug in the provider, which should be reported in the provider's own
2025-07-31T03:21:45.6374660Z         issue tracker.
2025-07-31T03:21:45.6375110Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (8244.90s)
```
