# advanced_cluster_tpf/TestAccAdvancedCluster_removeBlocksFromConfig Test Details
# Found 8 TestRuns in dev, qa from 2025-06-20 to 2025-06-26 from master branch: 1 unique tests, PASS(x 7) FAIL
Success rate: 87.50%

## Timeline
2025-06-19: MISSING
### 2025-06-20
#### PASS 42 minutes
```
2025-06-20T01:46:12.3364544Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-20T01:46:12.3390726Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-20T01:46:12.3513501Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2530.19s)
```
### 2025-06-21
#### PASS 38 minutes
```
2025-06-21T01:47:13.0107764Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-21T01:47:13.0122551Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-21T01:47:13.0254475Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2332.42s)
```
### 2025-06-22
#### FAIL 2 hours
```
2025-06-22T03:04:12.6134268Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-22T03:04:12.6155965Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-22T03:04:12.6410935Z === NAME  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-22T03:04:12.6411527Z     resource_advanced_cluster_test.go:1392: Step 3/4 error: Error running apply: exit status 1
2025-06-22T03:04:12.6411935Z         
2025-06-22T03:04:12.6412301Z         Error: Provider produced inconsistent result after apply
2025-06-22T03:04:12.6412767Z         
2025-06-22T03:04:12.6413193Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-06-22T03:04:12.6413804Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-06-22T03:04:12.6414214Z         unexpected new value:
2025-06-22T03:04:12.6414806Z         .replication_specs[0].region_configs[0].read_only_specs.instance_size: was
2025-06-22T03:04:12.6415316Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-06-22T03:04:12.6415602Z         
2025-06-22T03:04:12.6416037Z         This is a bug in the provider, which should be reported in the provider's own
2025-06-22T03:04:12.6416654Z         issue tracker.
2025-06-22T03:04:12.6416931Z         
2025-06-22T03:04:12.6417361Z         Error: Provider produced inconsistent result after apply
2025-06-22T03:04:12.6417670Z         
2025-06-22T03:04:12.6418212Z         When applying changes to mongodbatlas_advanced_cluster.test, provider
2025-06-22T03:04:12.6418950Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-06-22T03:04:12.6419383Z         unexpected new value:
2025-06-22T03:04:12.6419966Z         .replication_specs[0].region_configs[0].electable_specs.instance_size: was
2025-06-22T03:04:12.6420591Z         cty.StringVal("M10"), but now cty.StringVal("M20").
2025-06-22T03:04:12.6420882Z         
2025-06-22T03:04:12.6421432Z         This is a bug in the provider, which should be reported in the provider's own
2025-06-22T03:04:12.6421815Z         issue tracker.
2025-06-22T03:04:12.6422262Z --- FAIL: TestAccAdvancedCluster_removeBlocksFromConfig (7332.20s)
```
### 2025-06-23
#### PASS 43 minutes
```
2025-06-23T01:49:14.0965005Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-23T01:49:14.0986882Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-23T01:49:14.1145023Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2580.45s)
```
### 2025-06-24
#### PASS 44 minutes
```
2025-06-24T02:00:03.6491364Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-24T02:00:03.6513498Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-24T02:00:03.6667691Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2650.99s)
```
### 2025-06-25
#### PASS 43 minutes
```
2025-06-25T01:46:02.2050461Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-25T01:46:02.2077457Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-25T01:46:02.2234832Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2622.13s)
```
### 2025-06-26
#### PASS 41 minutes
```
2025-06-26T01:58:04.8017751Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T01:58:04.8047218Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T01:58:04.8185486Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2512.41s)
```
#### PASS 42 minutes
```
2025-06-26T05:26:49.4867085Z === RUN   TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T05:26:49.4898544Z === CONT  TestAccAdvancedCluster_removeBlocksFromConfig
2025-06-26T05:26:49.5041118Z --- PASS: TestAccAdvancedCluster_removeBlocksFromConfig (2546.79s)
```