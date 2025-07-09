# advanced_cluster_tpf/advancedcluster/TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset Test Details
# Found 66 TestRuns in dev, qa from 2025-05-22 to 2025-07-09 from master branch: 1 unique tests, PASS(x 64) FAIL(x 2)
Success rate: 96.97%

# #  Error Table

Date | Env | Runtime
--- | --- | ---
2025-06-05 00:35 | dev | 5.08s
2025-06-14 02:34 | dev | 135.03s

## Timeline
2025-03-11: MISSING
2025-03-12: MISSING
2025-03-13: MISSING
2025-03-14: MISSING
2025-03-15: MISSING
2025-03-16: MISSING
2025-03-17: MISSING
2025-03-18: MISSING
2025-03-19: MISSING
2025-03-20: MISSING
2025-03-21: MISSING
2025-03-22: MISSING
2025-03-23: MISSING
2025-03-24: MISSING
2025-03-25: MISSING
2025-03-26: MISSING
2025-03-27: MISSING
2025-03-28: MISSING
2025-03-29: MISSING
2025-03-30: MISSING
2025-03-31: MISSING
2025-04-01: MISSING
2025-04-02: MISSING
2025-04-03: MISSING
2025-04-04: MISSING
2025-04-05: MISSING
2025-04-06: MISSING
2025-04-07: MISSING
2025-04-08: MISSING
2025-04-09: MISSING
2025-04-10: MISSING
2025-04-11: MISSING
2025-04-12: MISSING
2025-04-13: MISSING
2025-04-14: MISSING
2025-04-15: MISSING
2025-04-16: MISSING
2025-04-17: MISSING
2025-04-18: MISSING
2025-04-19: MISSING
2025-04-20: MISSING
2025-04-21: MISSING
2025-04-22: MISSING
2025-04-23: MISSING
2025-04-24: MISSING
2025-04-25: MISSING
2025-04-26: MISSING
2025-04-27: MISSING
2025-04-28: MISSING
2025-04-29: MISSING
2025-04-30: MISSING
2025-05-01: MISSING
2025-05-02: MISSING
2025-05-03: MISSING
2025-05-04: MISSING
2025-05-05: MISSING
2025-05-06: MISSING
2025-05-07: MISSING
2025-05-08: MISSING
2025-05-09: MISSING
2025-05-10: MISSING
2025-05-11: MISSING
2025-05-12: MISSING
2025-05-13: MISSING
2025-05-14: MISSING
2025-05-15: MISSING
2025-05-16: MISSING
2025-05-17: MISSING
2025-05-18: MISSING
2025-05-19: MISSING
2025-05-20: MISSING
2025-05-21: MISSING
### 2025-05-22
#### PASS 11 minutes
### 2025-05-23
#### PASS 13 minutes
### 2025-05-24
#### PASS 12 minutes
### 2025-05-25
#### PASS 16 minutes
### 2025-05-26
#### PASS 15 minutes
### 2025-05-27
#### PASS 11 minutes
### 2025-05-28
#### PASS 13 minutes
#### PASS 14 minutes
#### PASS 16 minutes
### 2025-05-29
#### PASS 22 minutes
### 2025-05-30
#### PASS 21 minutes
#### PASS 13 minutes
### 2025-05-31
#### PASS 16 minutes
### 2025-06-01
#### PASS 14 minutes
#### PASS 13 minutes
#### PASS 11 minutes
#### PASS 12 minutes
#### PASS 12 minutes
### 2025-06-02
#### PASS 12 minutes
#### PASS 16 minutes
#### PASS 13 minutes
#### PASS 14 minutes
### 2025-06-03
#### PASS 15 minutes
### 2025-06-04
#### PASS 13 minutes
### 2025-06-05
#### FAIL 5 seconds
```
2025-06-05T00:35:38.5916131Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-05T00:35:38.5940931Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-05T00:35:38.6035045Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-05T00:35:38.6035927Z     resource_advanced_cluster_test.go:1432: Step 1/6, expected an error with pattern, no match on: Error running apply: exit status 1
2025-06-05T00:35:38.6036473Z         
2025-06-05T00:35:38.6036734Z         Error: Error in create
2025-06-05T00:35:38.6036985Z         
2025-06-05T00:35:38.6037321Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6038333Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6038986Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6039305Z         
2025-06-05T00:35:38.6039726Z         cluster name: test-acc-tf-c-5486755833846550867, API error details:
2025-06-05T00:35:38.6040409Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4e0c939f27413251a7f/clusters
2025-06-05T00:35:38.6041098Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6041683Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6042071Z         BadRequestDetail: 
2025-06-05T00:35:38.6053424Z    test_name=TestAccClusterAdvancedCluster_singleShardedMultiCloud test_terraform_path=/home/runner/work/_temp/42fd3dfc-6af2-4f11-bf4e-9449f43560eb/terraform
2025-06-05T00:35:38.6380461Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (5.85s)
```
### 2025-06-06
#### PASS 11 minutes
### 2025-06-07
#### PASS 13 minutes
### 2025-06-08
#### PASS 16 minutes
### 2025-06-09
#### PASS 15 minutes
### 2025-06-10
#### PASS 19 minutes
### 2025-06-11
#### PASS 14 minutes
#### PASS 14 minutes
### 2025-06-12
#### PASS 15 minutes
### 2025-06-13
#### PASS 13 minutes
### 2025-06-14
#### FAIL 2 minutes
```
2025-06-14T02:34:39.9644102Z === RUN   TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-14T02:34:39.9663567Z === CONT  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-14T02:34:39.9751908Z === NAME  TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset
2025-06-14T02:34:39.9752567Z     resource_advanced_cluster_test.go:1432: Step 2/6 error: Error running apply: exit status 1
2025-06-14T02:34:39.9752988Z         
2025-06-14T02:34:39.9753248Z         Error: Error in create
2025-06-14T02:34:39.9753490Z         
2025-06-14T02:34:39.9753811Z           with mongodbatlas_advanced_cluster.test,
2025-06-14T02:34:39.9754604Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-14T02:34:39.9755219Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-14T02:34:39.9755528Z         
2025-06-14T02:34:39.9755940Z         cluster name: test-acc-tf-c-2884212973396619475, API error details:
2025-06-14T02:34:39.9756604Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/684cc9488f295e188b9ca27c/clusters
2025-06-14T02:34:39.9757275Z         POST: HTTP 400 Bad Request (Error code: "DUPLICATE_CLUSTER_NAME") Detail: A
2025-06-14T02:34:39.9757888Z         cluster or serverless instance named test-acc-tf-c-2884212973396619475 is
2025-06-14T02:34:39.9758488Z         already present in group 684cc9488f295e188b9ca27c. Reason: Bad Request.
2025-06-14T02:34:39.9759080Z         Params: [cluster or serverless instance test-acc-tf-c-2884212973396619475
2025-06-14T02:34:39.9759568Z         684cc9488f295e188b9ca27c], BadRequestDetail: 
2025-06-14T02:34:39.9760031Z --- FAIL: TestAccAdvancedCluster_createTimeoutWithDeleteOnCreateReplicaset (135.27s)
```
### 2025-06-15
#### PASS 14 minutes
### 2025-06-16
#### PASS 24 minutes
### 2025-06-17
#### PASS 12 minutes
### 2025-06-18
#### PASS 16 minutes
#### PASS 12 minutes
### 2025-06-19
#### PASS 39 minutes
### 2025-06-20
#### PASS 13 minutes
### 2025-06-21
#### PASS 12 minutes
### 2025-06-22
#### PASS 15 minutes
### 2025-06-23
#### PASS 12 minutes
### 2025-06-24
#### PASS 14 minutes
### 2025-06-25
#### PASS 11 minutes
### 2025-06-26
#### PASS 16 minutes
#### PASS 12 minutes
### 2025-06-27
#### PASS 12 minutes
### 2025-06-28
#### PASS 12 minutes
### 2025-06-29
#### PASS 12 minutes
### 2025-06-30
#### PASS 16 minutes
### 2025-07-01
#### PASS 13 minutes
#### PASS 12 minutes
#### PASS 12 minutes
#### PASS 12 minutes
#### PASS 14 minutes
### 2025-07-02
#### PASS 12 minutes
### 2025-07-03
#### PASS 12 minutes
### 2025-07-04
#### PASS 16 minutes
### 2025-07-05
#### PASS 11 minutes
### 2025-07-06
#### PASS 13 minutes
### 2025-07-07
#### PASS 13 minutes
### 2025-07-08
#### PASS 13 minutes
### 2025-07-09
#### PASS 13 minutes