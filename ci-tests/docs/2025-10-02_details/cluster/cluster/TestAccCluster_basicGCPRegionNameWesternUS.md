# cluster/cluster/TestAccCluster_basicGCPRegionNameWesternUS Test Details
# Found 42 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 37) FAIL(x 5)
Success rate: 88.10%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-13 00:24](#error-2025-09-13t0024580000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68c4b9d859b3df51ed58c17b/clusters | dev | out_of_capacity | 2.06s
[2025-09-14 00:28](#error-2025-09-14t0028420000) |  | qa | timeout | 10802.07s
[2025-09-15 06:20](#error-2025-09-15t0620470000) |  | qa | timeout | 10802.05s
[2025-09-17 00:27](#error-2025-09-17t0027090000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68ca005b79bbd574571de64c/clusters | dev | out_of_capacity | 2.07s
[2025-10-01 10:40](#error-2025-10-01t1040550000) | OUT_OF_CAPACITY /api/atlas/v1.0/groups/68dd053577784f3f4721a6a3/clusters | dev | out_of_capacity | 2.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 17 minutes
- 2025-09-04 PASS 23 minutes
- 2025-09-05 PASS 16 minutes
- 2025-09-06 PASS 19 minutes
- 2025-09-07 PASS 29 minutes
- 2025-09-08
  - PASS 21 minutes
  - PASS 14 minutes
  - PASS 18 minutes
- 2025-09-09 PASS 16 minutes
- 2025-09-10 PASS 21 minutes
- 2025-09-11 PASS 16 minutes
- 2025-09-12 PASS 14 minutes
- 2025-09-13

### Error 2025-09-13T00:24:58+00:00
```
2025-09-13T00:24:58.9743658Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-09-13T00:24:58.9866805Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-13T00:25:01.5471988Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-13T00:25:01.5472834Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-09-13T00:25:01.5473248Z         
2025-09-13T00:25:01.5475002Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68c4b9d859b3df51ed58c17b/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-09-13T00:25:01.5476227Z         
2025-09-13T00:25:01.5476535Z           with mongodbatlas_cluster.test,
2025-09-13T00:25:01.5477141Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-13T00:25:01.5477696Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-13T00:25:01.5477989Z         
2025-09-13T00:25:01.5928632Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.62s)
```

- 2025-09-14

### Error 2025-09-14T00:28:42+00:00
```
2025-09-14T00:28:42.3124906Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-09-14T00:28:42.3146337Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-14T03:28:44.9048551Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-14T03:28:44.9049289Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-09-14T03:28:44.9049787Z         
2025-09-14T03:28:44.9050683Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-14T03:28:44.9051491Z         
2025-09-14T03:28:44.9051822Z           with mongodbatlas_cluster.test,
2025-09-14T03:28:44.9052551Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-14T03:28:44.9053218Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-14T03:28:44.9053524Z         
2025-09-14T03:28:44.9580566Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.65s)
```

- 2025-09-15
  - PASS 16 minutes
  - FAIL 3 hours

### Error 2025-09-15T06:20:47+00:00
```
2025-09-15T06:20:47.5454731Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-09-15T06:20:47.5531367Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-15T09:20:50.0415618Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-15T09:20:50.0416308Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-09-15T09:20:50.0416899Z         
2025-09-15T09:20:50.0418128Z         Error: error creating MongoDB Cluster: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 3h0m0s)
2025-09-15T09:20:50.0418906Z         
2025-09-15T09:20:50.0419268Z           with mongodbatlas_cluster.test,
2025-09-15T09:20:50.0420102Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-15T09:20:50.0420684Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-15T09:20:50.0421053Z         
2025-09-15T09:20:50.0912892Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (10802.54s)
```

- 2025-09-16 PASS 17 minutes
- 2025-09-17

### Error 2025-09-17T00:27:09+00:00
```
2025-09-17T00:27:09.8400529Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-09-17T00:27:09.8467860Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-17T00:27:12.5155777Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-09-17T00:27:12.5156501Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-09-17T00:27:12.5157213Z         
2025-09-17T00:27:12.5159647Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68ca005b79bbd574571de64c/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-09-17T00:27:12.5161350Z         
2025-09-17T00:27:12.5161872Z           with mongodbatlas_cluster.test,
2025-09-17T00:27:12.5162959Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-09-17T00:27:12.5163932Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-09-17T00:27:12.5164444Z         
2025-09-17T00:27:12.5652677Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.73s)
```

- 2025-09-18 PASS 24 minutes
- 2025-09-19 PASS 16 minutes
- 2025-09-20 PASS 28 minutes
- 2025-09-21 PASS 15 minutes
- 2025-09-22 PASS 15 minutes
- 2025-09-23 PASS 18 minutes
- 2025-09-24 PASS 21 minutes
- 2025-09-25 PASS 16 minutes
- 2025-09-26 PASS 17 minutes
- 2025-09-27 PASS 26 minutes
- 2025-09-28 PASS 16 minutes
- 2025-09-29 PASS 53 minutes
- 2025-09-30
  - PASS 15 minutes
  - PASS 11 minutes
  - PASS 13 minutes
- 2025-10-01
  - PASS 15 minutes
  - PASS 16 minutes
  - PASS 19 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - FAIL 2 seconds

### Error 2025-10-01T10:40:55+00:00
```
2025-10-01T10:40:55.9976959Z === RUN   TestAccCluster_basicGCPRegionNameWesternUS
2025-10-01T10:40:55.9989190Z === CONT  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-01T10:40:58.6620837Z === NAME  TestAccCluster_basicGCPRegionNameWesternUS
2025-10-01T10:40:58.6621534Z     resource_cluster_test.go:1088: Step 1/1 error: Error running apply: exit status 1
2025-10-01T10:40:58.6622139Z         
2025-10-01T10:40:58.6623943Z         Error: error creating MongoDB Cluster: POST https://cloud-dev.mongodb.com/api/atlas/v1.0/groups/68dd053577784f3f4721a6a3/clusters: 409 (request "OUT_OF_CAPACITY") The requested region is currently out of capacity for the requested instance size.
2025-10-01T10:40:58.6625086Z         
2025-10-01T10:40:58.6625372Z           with mongodbatlas_cluster.test,
2025-10-01T10:40:58.6626114Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "test":
2025-10-01T10:40:58.6626881Z           12: 	resource "mongodbatlas_cluster" "test" {
2025-10-01T10:40:58.6627169Z         
2025-10-01T10:40:58.7082003Z --- FAIL: TestAccCluster_basicGCPRegionNameWesternUS (2.71s)
```

  - PASS 15 minutes
  - PASS 13 minutes
- 2025-10-02 PASS 22 minutes