# advanced_cluster/advancedcluster/TestAccClusterAdvancedCluster_singleShardedMultiCloud Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 6)
Success rate: 81.82%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-14 00:33](#error-2026-01-14t0033000000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6966e438dec294f0362bc221/clusters | dev | out_of_capacity | 6.01s
[2026-01-29 00:36](#error-2026-01-29t0036310000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697aab8df4a2a16d1a690e92/clusters | dev | out_of_capacity | 4.09s
[2026-01-31 00:35](#error-2026-01-31t0035190000) | OUT_OF_CAPACITY /api/atlas/v2/groups/697d4e477d00588dcf9f3a06/clusters | dev | out_of_capacity | 8.01s
[2026-02-02 00:38](#error-2026-02-02t0038490000) |  | dev | timeout | 10809.01s
[2026-02-03 00:39](#error-2026-02-03t0039300000) | OUT_OF_CAPACITY /api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters | dev | out_of_capacity | 9.03s
[2026-02-05 00:38](#error-2026-02-05t0038590000) | OUT_OF_CAPACITY /api/atlas/v2/groups/6983e6a3304923ebd1859e98/clusters | dev | out_of_capacity | 8.05s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 41 minutes
- 2026-01-09 PASS 50 minutes
- 2026-01-10 PASS 39 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 45 minutes
- 2026-01-13 PASS 50 minutes
- 2026-01-14

### Error 2026-01-14T00:33:00+00:00
```
2026-01-14T00:33:00.0734458Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-14T00:34:44.5253171Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-14T00:34:50.3818725Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-14T00:34:50.3819728Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2026-01-14T00:34:50.3820436Z         
2026-01-14T00:34:50.3820893Z         Error: Error in create
2026-01-14T00:34:50.3821346Z         
2026-01-14T00:34:50.3822024Z           with mongodbatlas_advanced_cluster.test,
2026-01-14T00:34:50.3823324Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-14T00:34:50.3824424Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-14T00:34:50.3825026Z         
2026-01-14T00:34:50.3825780Z         cluster name: test-acc-tf-c-8728658799270677098, API error details:
2026-01-14T00:34:50.3826939Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6966e438dec294f0362bc221/clusters
2026-01-14T00:34:50.3828231Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-14T00:34:50.3829334Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-14T00:34:50.3830234Z         Conflict. Params: [], BadRequestDetail: 
2026-01-14T00:34:50.6083112Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (6.08s)
```

- 2026-01-15 PASS 47 minutes
- 2026-01-16 PASS 52 minutes
- 2026-01-17 PASS 52 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 42 minutes
- 2026-01-20 PASS 43 minutes
- 2026-01-21 PASS 49 minutes
- 2026-01-22 PASS 47 minutes
- 2026-01-23 PASS 47 minutes
- 2026-01-24 PASS 38 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 40 minutes
- 2026-01-27 PASS 43 minutes
- 2026-01-28 PASS 44 minutes
- 2026-01-29

### Error 2026-01-29T00:36:31+00:00
```
2026-01-29T00:36:31.7974323Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-29T00:38:42.1408975Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-29T00:38:46.9590254Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-29T00:38:46.9590898Z     resource_test.go:199: Step 1/3 error: Error running apply: exit status 1
2026-01-29T00:38:46.9591296Z         
2026-01-29T00:38:46.9591568Z         Error: Error in create
2026-01-29T00:38:46.9591825Z         
2026-01-29T00:38:46.9592170Z           with mongodbatlas_advanced_cluster.test,
2026-01-29T00:38:46.9593030Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-29T00:38:46.9593679Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-29T00:38:46.9594018Z         
2026-01-29T00:38:46.9594588Z         cluster name: test-acc-tf-c-6716780358069383062, API error details:
2026-01-29T00:38:46.9595317Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab8df4a2a16d1a690e92/clusters
2026-01-29T00:38:46.9596035Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-29T00:38:46.9596717Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-29T00:38:46.9597510Z         Conflict. Params: [], BadRequestDetail: 
2026-01-29T00:38:47.0047276Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (4.87s)
```

- 2026-01-30 PASS 55 minutes
- 2026-01-31

### Error 2026-01-31T00:35:19+00:00
```
2026-01-31T00:35:19.7493795Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-31T00:36:56.1512334Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-31T00:37:01.5281782Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-01-31T00:37:01.5282529Z     resource_test.go:158: Step 1/3 error: Error running apply: exit status 1
2026-01-31T00:37:01.5282985Z         
2026-01-31T00:37:01.5283289Z         Error: Error in create
2026-01-31T00:37:01.5283542Z         
2026-01-31T00:37:01.5284137Z           with mongodbatlas_advanced_cluster.test,
2026-01-31T00:37:01.5285041Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-01-31T00:37:01.5286031Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-01-31T00:37:01.5286748Z         
2026-01-31T00:37:01.5287176Z         cluster name: test-acc-tf-c-8800579866856176991, API error details:
2026-01-31T00:37:01.5287884Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697d4e477d00588dcf9f3a06/clusters
2026-01-31T00:37:01.5288595Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-01-31T00:37:01.5289266Z         region is currently out of capacity for the requested instance size. Reason:
2026-01-31T00:37:01.5289777Z         Conflict. Params: [], BadRequestDetail: 
2026-01-31T00:37:01.5762948Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (8.09s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T00:38:49+00:00
```
2026-02-02T00:38:49.8151070Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-02T00:40:19.9757964Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-02T03:40:26.6480353Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-02T03:40:26.6481725Z     resource_test.go:158: Step 1/3 error: Error running apply: exit status 1
2026-02-02T03:40:26.6482697Z         
2026-02-02T03:40:26.6483133Z         Error: Error in create
2026-02-02T03:40:26.6483562Z         
2026-02-02T03:40:26.6484140Z           with mongodbatlas_advanced_cluster.test,
2026-02-02T03:40:26.6485373Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-02T03:40:26.6486506Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-02T03:40:26.6487076Z         
2026-02-02T03:40:26.6487852Z         cluster=test-acc-tf-c-3497827062294328533 didn't reach desired state: IDLE,
2026-02-02T03:40:26.6488682Z         error: context deadline exceeded
2026-02-02T03:40:26.6594048Z   
2026-02-02T03:40:26.8397285Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (10809.06s)
```

- 2026-02-03

### Error 2026-02-03T00:39:30+00:00
```
2026-02-03T00:39:30.6539601Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-03T00:42:03.6226636Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-03T00:42:09.5784061Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-03T00:42:09.5785272Z     resource_test.go:158: Step 1/3 error: Error running apply: exit status 1
2026-02-03T00:42:09.5786154Z         
2026-02-03T00:42:09.5786817Z         Error: Error in create
2026-02-03T00:42:09.5787390Z         
2026-02-03T00:42:09.5788101Z           with mongodbatlas_advanced_cluster.test,
2026-02-03T00:42:09.5789644Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-03T00:42:09.5790884Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-03T00:42:09.5791594Z         
2026-02-03T00:42:09.5792430Z         cluster name: test-acc-tf-c-1109216559961278767, API error details:
2026-02-03T00:42:09.5793725Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143c2b2e54ee995909f8a/clusters
2026-02-03T00:42:09.5795091Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-03T00:42:09.5796659Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-03T00:42:09.5797720Z         Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:09.9564203Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (9.32s)
```

- 2026-02-04 PASS an hour
- 2026-02-05

### Error 2026-02-05T00:38:59+00:00
```
2026-02-05T00:38:59.3531284Z === RUN   TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-05T00:40:26.3016526Z === CONT  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-05T00:40:31.8592306Z === NAME  TestAccClusterAdvancedCluster_singleShardedMultiCloud
2026-02-05T00:40:31.8593501Z     resource_test.go:158: Step 1/3 error: Error running apply: exit status 1
2026-02-05T00:40:31.8594239Z         
2026-02-05T00:40:31.8594702Z         Error: Error in create
2026-02-05T00:40:31.8595177Z         
2026-02-05T00:40:31.8595766Z           with mongodbatlas_advanced_cluster.test,
2026-02-05T00:40:31.8596980Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2026-02-05T00:40:31.8598641Z           12: 		resource "mongodbatlas_advanced_cluster" "test" {
2026-02-05T00:40:31.8599258Z         
2026-02-05T00:40:31.8600068Z         cluster name: test-acc-tf-c-1927968992264014809, API error details:
2026-02-05T00:40:31.8601386Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e6a3304923ebd1859e98/clusters
2026-02-05T00:40:31.8602710Z         POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested
2026-02-05T00:40:31.8604904Z         region is currently out of capacity for the requested instance size. Reason:
2026-02-05T00:40:31.8605842Z         Conflict. Params: [], BadRequestDetail: 
2026-02-05T00:40:31.9030513Z --- FAIL: TestAccClusterAdvancedCluster_singleShardedMultiCloud (8.53s)
```

- 2026-02-06 PASS an hour

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 39 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS an hour
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 39 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 37 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 42 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 45 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 37 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
