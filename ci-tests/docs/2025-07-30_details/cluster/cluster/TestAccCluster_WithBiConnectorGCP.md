# cluster/cluster/TestAccCluster_WithBiConnectorGCP Test Details
# Found 39 TestRuns in dev, qa from 2025-07-01 to 2025-07-30 from master branch: 1 unique tests, PASS(x 33) FAIL(x 6)
Success rate: 84.62%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-04 00:28](#error-2025-07-04t0028480000) |  | dev | timeout | 10804.04s
[2025-07-05 00:28](#error-2025-07-05t0028030000) |  | dev | timeout | 10805.05s
[2025-07-07 00:31](#error-2025-07-07t0031310000) |  | dev | timeout | 10804.04s
[2025-07-11 00:29](#error-2025-07-11t0029450000) |  | dev | timeout | 10804.09s
[2025-07-14 00:30](#error-2025-07-14t0030560000) |  | dev | timeout | 10805.00s
[2025-07-20 00:32](#error-2025-07-20t0032510000) |  | qa | timeout | 10803.10s

## Timeline
- 2025-06-30: MISSING
- 2025-07-01
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 17 minutes
- 2025-07-02 PASS 18 minutes
- 2025-07-03 PASS 16 minutes
- 2025-07-04

### Error 2025-07-04T00:28:48+00:00
```
2025-07-04T00:28:48.5927600Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-04T00:28:53.1164747Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-04T03:28:55.7282414Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-04T03:28:55.7283589Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-04T03:28:55.7284215Z         
2025-07-04T03:28:55.7285420Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-04T03:28:55.7286304Z         
2025-07-04T03:28:55.7286773Z           with mongodbatlas_cluster.basic_gcp,
2025-07-04T03:28:55.7287732Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-04T03:28:55.7288674Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-04T03:28:55.7289161Z         
2025-07-04T03:28:55.7746305Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.38s)
```

- 2025-07-05

### Error 2025-07-05T00:28:03+00:00
```
2025-07-05T00:28:03.0649648Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-05T00:28:09.1120358Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-05T03:28:11.8489903Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-05T03:28:11.8490794Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-05T03:28:11.8491726Z         
2025-07-05T03:28:11.8493014Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-05T03:28:11.8493984Z         
2025-07-05T03:28:11.8494509Z           with mongodbatlas_cluster.basic_gcp,
2025-07-05T03:28:11.8495863Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-05T03:28:11.8496809Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-05T03:28:11.8497288Z         
2025-07-05T03:28:11.8984334Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10805.52s)
```

- 2025-07-06 PASS 14 minutes
- 2025-07-07

### Error 2025-07-07T00:31:31+00:00
```
2025-07-07T00:31:31.6866423Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-07T00:31:36.2481483Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-07T03:31:38.9494707Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-07T03:31:38.9495594Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-07T03:31:38.9496263Z         
2025-07-07T03:31:38.9497509Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-07T03:31:38.9498419Z         
2025-07-07T03:31:38.9498936Z           with mongodbatlas_cluster.basic_gcp,
2025-07-07T03:31:38.9500020Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-07T03:31:38.9501017Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-07T03:31:38.9501523Z         
2025-07-07T03:31:39.0024844Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.43s)
```

- 2025-07-08 PASS 18 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-07-11

### Error 2025-07-11T00:29:45+00:00
```
2025-07-11T00:29:45.7920241Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-11T00:29:49.8191674Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-11T03:29:52.5589734Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-11T03:29:52.5590386Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-11T03:29:52.5590950Z         
2025-07-11T03:29:52.5591772Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-11T03:29:52.5592543Z         
2025-07-11T03:29:52.5592862Z           with mongodbatlas_cluster.basic_gcp,
2025-07-11T03:29:52.5593474Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-11T03:29:52.5594038Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-11T03:29:52.5594756Z         
2025-07-11T03:29:52.6031609Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10804.89s)
```

- 2025-07-12 PASS 18 minutes
- 2025-07-13 PASS 14 minutes
- 2025-07-14

### Error 2025-07-14T00:30:56+00:00
```
2025-07-14T00:30:56.4796651Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-14T00:31:01.0312116Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-14T03:31:03.6186913Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-14T03:31:03.6187817Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-14T03:31:03.6188480Z         
2025-07-14T03:31:03.6189823Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-14T03:31:03.6190755Z         
2025-07-14T03:31:03.6191289Z           with mongodbatlas_cluster.basic_gcp,
2025-07-14T03:31:03.6192345Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-14T03:31:03.6193307Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-14T03:31:03.6193818Z         
2025-07-14T03:31:03.6342561Z    test_name=TestAccCluster_RegionsConfig
2025-07-14T03:31:03.7046977Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10805.03s)
```

- 2025-07-15 PASS 15 minutes
- 2025-07-16 PASS 15 minutes
- 2025-07-17 PASS 16 minutes
- 2025-07-18 PASS 22 minutes
- 2025-07-19 PASS 17 minutes
- 2025-07-20

### Error 2025-07-20T00:32:51+00:00
```
2025-07-20T00:32:51.3744539Z === RUN   TestAccCluster_WithBiConnectorGCP
2025-07-20T00:32:57.2505823Z === CONT  TestAccCluster_WithBiConnectorGCP
2025-07-20T03:32:59.9855844Z === NAME  TestAccCluster_WithBiConnectorGCP
2025-07-20T03:32:59.9856468Z     resource_cluster_test.go:413: Step 1/2 error: Error running apply: exit status 1
2025-07-20T03:32:59.9856937Z         
2025-07-20T03:32:59.9858679Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-07-20T03:32:59.9859448Z         
2025-07-20T03:32:59.9859771Z           with mongodbatlas_cluster.basic_gcp,
2025-07-20T03:32:59.9860382Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "basic_gcp":
2025-07-20T03:32:59.9860972Z           12: 		resource "mongodbatlas_cluster" "basic_gcp" {
2025-07-20T03:32:59.9861287Z         
2025-07-20T03:33:00.0282866Z --- FAIL: TestAccCluster_WithBiConnectorGCP (10803.98s)
```

- 2025-07-21 PASS 14 minutes
- 2025-07-22 PASS 13 minutes
- 2025-07-23
  - PASS 18 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 14 minutes
- 2025-07-24 PASS 15 minutes
- 2025-07-25 PASS 17 minutes
- 2025-07-26 PASS 18 minutes
- 2025-07-27 PASS 16 minutes
- 2025-07-28 PASS 15 minutes
- 2025-07-29 PASS 16 minutes
- 2025-07-30 PASS 16 minutes