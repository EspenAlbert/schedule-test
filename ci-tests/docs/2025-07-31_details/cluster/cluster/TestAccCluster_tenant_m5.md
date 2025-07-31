# cluster/cluster/TestAccCluster_tenant_m5 Test Details
# Found 34 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-11 00:29](#error-2025-07-11t0029490000) |  | dev | timeout | 10802.07s
[2025-07-14 00:31](#error-2025-07-14t0031010000) |  | dev | timeout | 10802.01s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 4 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 4 minutes
- 2025-07-07 PASS 4 minutes
- 2025-07-08 PASS 4 minutes
- 2025-07-09 PASS 4 minutes
- 2025-07-10
  - PASS 9 minutes
  - PASS 4 minutes
- 2025-07-11

### Error 2025-07-11T00:29:49+00:00
```
2025-07-11T00:29:49.8176054Z === RUN   TestAccCluster_tenant_m5
2025-07-11T00:29:49.8348066Z === CONT  TestAccCluster_tenant_m5
2025-07-11T03:29:52.5035822Z === NAME  TestAccCluster_tenant_m5
2025-07-11T03:29:52.5036624Z     resource_cluster_test.go:1063: Step 1/1 error: Error running apply: exit status 1
2025-07-11T03:29:52.5037080Z         
2025-07-11T03:29:52.5037810Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:52.5038517Z         
2025-07-11T03:29:52.5038918Z           with mongodbatlas_cluster.tenant,
2025-07-11T03:29:52.5039683Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2025-07-11T03:29:52.5040330Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2025-07-11T03:29:52.5040620Z         
2025-07-11T03:29:52.5542723Z --- FAIL: TestAccCluster_tenant_m5 (10802.73s)
```

- 2025-07-12 PASS 4 minutes
- 2025-07-13 PASS 4 minutes
- 2025-07-14

### Error 2025-07-14T00:31:01+00:00
```
2025-07-14T00:31:01.0099864Z === RUN   TestAccCluster_tenant_m5
2025-07-14T00:31:01.0310682Z === CONT  TestAccCluster_tenant_m5
2025-07-14T03:31:03.0774210Z === NAME  TestAccCluster_tenant_m5
2025-07-14T03:31:03.0775119Z     resource_cluster_test.go:1063: Step 1/1 error: Error running apply: exit status 1
2025-07-14T03:31:03.0775840Z         
2025-07-14T03:31:03.0777035Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.0778211Z         
2025-07-14T03:31:03.0778548Z           with mongodbatlas_cluster.tenant,
2025-07-14T03:31:03.0779140Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "tenant":
2025-07-14T03:31:03.0780166Z           12: 	resource "mongodbatlas_cluster" "tenant" {
2025-07-14T03:31:03.0788105Z         
2025-07-14T03:31:03.1175645Z    test_name=TestAccCluster_basicGCPRegionNameUSWest2
2025-07-14T03:31:03.1227261Z --- FAIL: TestAccCluster_tenant_m5 (10802.10s)
```

- 2025-07-15 PASS 4 minutes
- 2025-07-16 PASS 4 minutes
- 2025-07-17 PASS 4 minutes
- 2025-07-18 PASS 4 minutes
- 2025-07-19 PASS 4 minutes
- 2025-07-20 PASS 4 minutes
- 2025-07-21 PASS 4 minutes
- 2025-07-22 PASS 4 minutes
- 2025-07-23
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-07-24 PASS 4 minutes
- 2025-07-25 PASS 4 minutes
- 2025-07-26 PASS 4 minutes
- 2025-07-27 PASS 4 minutes
- 2025-07-28 PASS 4 minutes
- 2025-07-29 PASS 4 minutes
- 2025-07-30 PASS 4 minutes
- 2025-07-31 PASS 5 minutes