# advanced_cluster_tpf/advancedcluster/TestAccClusterAdvancedCluster_defaultWrite Test Details
# Found 116 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 113) FAIL(x 3)
Success rate: 97.41%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-07 04:32](#error-2025-05-07t0432580000) |  | dev | timeout | 13052.03s
[2025-05-11 00:30](#error-2025-05-11t0030010000) |  | qa |  | 0.00s
[2025-06-05 00:35](#error-2025-06-05t0035380000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters | dev | flaky_500 | 10.08s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 29 minutes
- 2025-04-13 PASS 37 minutes
- 2025-04-14 PASS 27 minutes
- 2025-04-15 PASS 41 minutes
- 2025-04-16
  - PASS 29 minutes
  - PASS 39 minutes
- 2025-04-17 PASS 33 minutes
- 2025-04-18 PASS 30 minutes
- 2025-04-19 PASS 29 minutes
- 2025-04-20 PASS 30 minutes
- 2025-04-21 PASS 36 minutes
- 2025-04-22 PASS 31 minutes
- 2025-04-23 PASS 34 minutes
- 2025-04-24 PASS 30 minutes
- 2025-04-25 PASS 33 minutes
- 2025-04-26 PASS 31 minutes
- 2025-04-27 PASS 36 minutes
- 2025-04-28 PASS 32 minutes
- 2025-04-29 PASS 31 minutes
- 2025-04-30 PASS 34 minutes
- 2025-05-01
  - PASS 30 minutes
  - PASS 31 minutes
  - PASS 29 minutes
  - PASS 31 minutes
  - PASS 28 minutes
  - PASS 29 minutes
  - PASS 32 minutes
- 2025-05-02 PASS 38 minutes
- 2025-05-03 PASS 33 minutes
- 2025-05-04 PASS 28 minutes
- 2025-05-05 PASS 27 minutes
- 2025-05-06 PASS 30 minutes
- 2025-05-07

### Error 2025-05-07T04:32:58+00:00
```
2025-05-07T04:32:58.5323425Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-07T04:32:58.5408877Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-05-07T04:32:58.5494084Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-07T04:32:58.5495573Z     pre_check.go:40: Time before creating cluster: 2025-05-07T00:55:51.863510685Z, ProjectID: 681aaf0eae6e67427d723a40, Cluster name: test-acc-tf-c-6175643381110953822
2025-05-07T04:32:58.5632472Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-05-07T04:32:58.5633156Z     resource_advanced_cluster_test.go:504: Error running post-test destroy, there may be dangling resources: exit status 1
2025-05-07T04:32:58.5633661Z         
2025-05-07T04:32:58.5634069Z         Error: Error in delete
2025-05-07T04:32:58.5634320Z         
2025-05-07T04:32:58.5634747Z         cluster=test-acc-tf-c-4992380960484583819 didn't reach desired state:
2025-05-07T04:32:58.5635367Z         DELETED, error: timeout while waiting for state to become 'DELETED' (last
2025-05-07T04:32:58.5635830Z         state: 'DELETING', timeout: 3h0m0s)
2025-05-07T04:32:58.5636215Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (13052.26s)
```

- 2025-05-08 PASS 34 minutes
- 2025-05-09 PASS 37 minutes
- 2025-05-10 PASS 33 minutes
- 2025-05-11

### Error 2025-05-11T00:30:01+00:00
```
2025-05-11T00:30:01.7867568Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-05-11T00:30:01.7867915Z     shared_resource.go:84: 
2025-05-11T00:30:01.7868803Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:01.7870934Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:84
2025-05-11T00:30:01.7873121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:164
2025-05-11T00:30:01.7875051Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:83
2025-05-11T00:30:01.7877339Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/resource_advanced_cluster_test.go:479
2025-05-11T00:30:01.7878247Z         	Error:      	Received unexpected error:
2025-05-11T00:30:01.7879213Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7879890Z         	Test:       	TestAccClusterAdvancedCluster_defaultWrite
2025-05-11T00:30:01.7881163Z         	Messages:   	Project creation failed: test-acc-tf-p-6007958160750380575, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:01.7882231Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (0.02s)
```

- 2025-05-12 PASS 30 minutes
- 2025-05-13
  - PASS 30 minutes
  - PASS 28 minutes
- 2025-05-14 PASS 33 minutes
- 2025-05-15 PASS 32 minutes
- 2025-05-16 PASS 31 minutes
- 2025-05-17 PASS 31 minutes
- 2025-05-18 PASS 31 minutes
- 2025-05-19 PASS 32 minutes
- 2025-05-20 PASS 31 minutes
- 2025-05-21
  - PASS 30 minutes
  - PASS 24 minutes
- 2025-05-22 PASS 31 minutes
- 2025-05-23 PASS 27 minutes
- 2025-05-24 PASS 29 minutes
- 2025-05-25 PASS 40 minutes
- 2025-05-26 PASS 30 minutes
- 2025-05-27 PASS 28 minutes
- 2025-05-28
  - PASS 29 minutes
  - PASS 29 minutes
  - PASS 31 minutes
- 2025-05-29 PASS 36 minutes
- 2025-05-30
  - PASS an hour
  - PASS 33 minutes
- 2025-05-31 PASS 29 minutes
- 2025-06-01
  - PASS 26 minutes
  - PASS 28 minutes
  - PASS 28 minutes
  - PASS 28 minutes
  - PASS 28 minutes
- 2025-06-02
  - PASS 25 minutes
  - PASS 30 minutes
  - PASS 32 minutes
  - PASS 28 minutes
- 2025-06-03 PASS 30 minutes
- 2025-06-04 PASS 29 minutes
- 2025-06-05

### Error 2025-06-05T00:35:38+00:00
```
2025-06-05T00:35:38.5879160Z === RUN   TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:35:38.5939562Z === CONT  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:35:38.6655066Z === NAME  TestAccClusterAdvancedCluster_defaultWrite
2025-06-05T00:35:38.6655702Z     pre_check.go:40: Time before creating cluster: 2025-06-05T00:29:36.007801088Z, ProjectID: 6840e4d6161ca93c1f05303e, Cluster name: test-acc-tf-c-4677529657920078343
2025-06-05T00:35:38.6661449Z   
2025-06-05T00:35:38.6661800Z     resource_advanced_cluster_test.go:507: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:35:38.6661888Z         
2025-06-05T00:35:38.6662039Z         Error: Error in create
2025-06-05T00:35:38.6662129Z         
2025-06-05T00:35:38.6662353Z           with mongodbatlas_advanced_cluster.test,
2025-06-05T00:35:38.6662800Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_advanced_cluster" "test":
2025-06-05T00:35:38.6663206Z           12: resource "mongodbatlas_advanced_cluster" "test" {
2025-06-05T00:35:38.6663301Z         
2025-06-05T00:35:38.6663611Z         cluster name: test-acc-tf-c-4677529657920078343, API error details:
2025-06-05T00:35:38.6664023Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4d6161ca93c1f05303e/clusters
2025-06-05T00:35:38.6664384Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-05T00:35:38.6664783Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-05T00:35:38.6664928Z         BadRequestDetail: 
2025-06-05T00:35:38.6665110Z --- FAIL: TestAccClusterAdvancedCluster_defaultWrite (10.84s)
```

- 2025-06-06 PASS 34 minutes
- 2025-06-07 PASS 34 minutes
- 2025-06-08 PASS 30 minutes
- 2025-06-09 PASS 33 minutes
- 2025-06-10 PASS an hour
- 2025-06-11
  - PASS 31 minutes
  - PASS 41 minutes
- 2025-06-12 PASS 34 minutes
- 2025-06-13 PASS 33 minutes
- 2025-06-14 PASS 29 minutes
- 2025-06-15 PASS 29 minutes
- 2025-06-16 PASS 31 minutes
- 2025-06-17 PASS 27 minutes
- 2025-06-18
  - PASS 34 minutes
  - PASS 28 minutes
- 2025-06-19 PASS an hour
- 2025-06-20 PASS 32 minutes
- 2025-06-21 PASS 30 minutes
- 2025-06-22 PASS 46 minutes
- 2025-06-23 PASS 27 minutes
- 2025-06-24 PASS 36 minutes
- 2025-06-25 PASS 30 minutes
- 2025-06-26
  - PASS 33 minutes
  - PASS 28 minutes
- 2025-06-27 PASS 42 minutes
- 2025-06-28 PASS 31 minutes
- 2025-06-29 PASS 35 minutes
- 2025-06-30 PASS 33 minutes
- 2025-07-01
  - PASS 33 minutes
  - PASS 28 minutes
  - PASS 32 minutes
  - PASS 30 minutes
  - PASS an hour
- 2025-07-02 PASS 32 minutes
- 2025-07-03 PASS 29 minutes
- 2025-07-04 PASS 32 minutes
- 2025-07-05 PASS 31 minutes
- 2025-07-06 PASS 30 minutes
- 2025-07-07 PASS 29 minutes
- 2025-07-08 PASS 33 minutes
- 2025-07-09 PASS 29 minutes
- 2025-07-10 PASS 28 minutes