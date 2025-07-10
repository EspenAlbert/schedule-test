# advanced_cluster/advancedcluster/TestAccAdvancedCluster_moveNotSupportedLegacySchema Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 107) SKIP(x 6) FAIL(x 2)
Success rate: 98.17%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030080000) |  | qa |  | 0.04s
[2025-06-05 00:29](#error-2025-06-05t0029020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4ce161ca93c1f052c81/clusters/test-acc-tf-c-1875764119240975920 | dev | flaky_500 | 188.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 12 minutes
- 2025-04-13 PASS 17 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 29 minutes
- 2025-04-16
  - PASS 13 minutes
  - PASS 19 minutes
- 2025-04-17 PASS 15 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 17 minutes
- 2025-04-20 PASS 16 minutes
- 2025-04-21 PASS 15 minutes
- 2025-04-22 PASS 15 minutes
- 2025-04-23 PASS 16 minutes
- 2025-04-24 PASS 16 minutes
- 2025-04-25 PASS 17 minutes
- 2025-04-26 PASS 13 minutes
- 2025-04-27 PASS 16 minutes
- 2025-04-28 PASS 16 minutes
- 2025-04-29 PASS 15 minutes
- 2025-04-30 PASS 24 minutes
- 2025-05-01
  - PASS 17 minutes
  - PASS 14 minutes
  - PASS 18 minutes
  - PASS 12 minutes
  - SKIP a second
  - SKIP 2 seconds
  - SKIP 2 seconds
- 2025-05-02 PASS 19 minutes
- 2025-05-03 PASS 14 minutes
- 2025-05-04 PASS 16 minutes
- 2025-05-05 PASS 18 minutes
- 2025-05-06 PASS 13 minutes
- 2025-05-07 PASS 12 minutes
- 2025-05-08 PASS 15 minutes
- 2025-05-09 PASS 14 minutes
- 2025-05-10 PASS 14 minutes
- 2025-05-11

### Error 2025-05-11T00:30:08+00:00
```
2025-05-11T00:30:08.5157762Z === RUN   TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-05-11T00:30:08.5158893Z     move_state_test.go:16: Creating execution project: test-acc-tf-p-2503380255032410286
2025-05-11T00:30:08.9274649Z     move_state_test.go:16: 
2025-05-11T00:30:08.9276669Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:08.9281198Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:08.9285159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/move_state_test.go:16
2025-05-11T00:30:08.9286449Z         	Error:      	Received unexpected error:
2025-05-11T00:30:08.9287824Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:08.9288556Z         	Test:       	TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-05-11T00:30:08.9290567Z         	Messages:   	Project creation failed: test-acc-tf-p-2503380255032410286, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:08.9292386Z --- FAIL: TestAccAdvancedCluster_moveNotSupportedLegacySchema (0.41s)
```

- 2025-05-12 PASS 16 minutes
- 2025-05-13
  - PASS 16 minutes
  - PASS 14 minutes
- 2025-05-14 PASS 16 minutes
- 2025-05-15 PASS 14 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 19 minutes
- 2025-05-18 PASS 16 minutes
- 2025-05-19 PASS 15 minutes
- 2025-05-20 PASS 15 minutes
- 2025-05-21 PASS 12 minutes
- 2025-05-22 PASS 12 minutes
- 2025-05-23 PASS 12 minutes
- 2025-05-24 PASS 13 minutes
- 2025-05-25 PASS 15 minutes
- 2025-05-26 PASS 14 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 12 minutes
  - PASS 17 minutes
  - PASS 17 minutes
- 2025-05-29
  - PASS 20 minutes
  - PASS 11 minutes
- 2025-05-30
  - PASS an hour
  - PASS 15 minutes
- 2025-05-31 PASS 15 minutes
- 2025-06-01
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 12 minutes
  - SKIP 2 seconds
- 2025-06-02
  - PASS 14 minutes
  - SKIP a second
  - SKIP a second
- 2025-06-03 PASS 14 minutes
- 2025-06-04 PASS 17 minutes
- 2025-06-05

### Error 2025-06-05T00:29:02+00:00
```
2025-06-05T00:29:02.1138677Z === RUN   TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-06-05T00:29:02.1140811Z     move_state_test.go:16: Creating execution project: test-acc-tf-p-1630774064058398978
2025-06-05T00:35:42.8153890Z === CONT  TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-06-05T00:38:48.2885770Z === NAME  TestAccAdvancedCluster_moveNotSupportedLegacySchema
2025-06-05T00:38:48.2886731Z     move_state_test.go:19: Step 1/3 error: Error running apply: exit status 1
2025-06-05T00:38:48.2887631Z         
2025-06-05T00:38:48.2890759Z         Error: error creating MongoDB Cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4ce161ca93c1f052c81/clusters/test-acc-tf-c-1875764119240975920 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:48.2892852Z         
2025-06-05T00:38:48.2893397Z           with mongodbatlas_cluster.old,
2025-06-05T00:38:48.2894489Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_cluster" "old":
2025-06-05T00:38:48.2895969Z           12: 		resource "mongodbatlas_cluster" "old" {
2025-06-05T00:38:48.2896536Z         
2025-06-05T00:38:48.4353758Z --- FAIL: TestAccAdvancedCluster_moveNotSupportedLegacySchema (188.17s)
```

- 2025-06-06 PASS 24 minutes
- 2025-06-07 PASS 14 minutes
- 2025-06-08 PASS 15 minutes
- 2025-06-09 PASS 17 minutes
- 2025-06-10 PASS 12 minutes
- 2025-06-11
  - PASS 15 minutes
  - PASS 14 minutes
- 2025-06-12 PASS 13 minutes
- 2025-06-13 PASS 14 minutes
- 2025-06-14 PASS 19 minutes
- 2025-06-15 PASS 15 minutes
- 2025-06-16 PASS 16 minutes
- 2025-06-17 PASS 14 minutes
- 2025-06-18
  - PASS 13 minutes
  - PASS 17 minutes
- 2025-06-19 PASS 48 minutes
- 2025-06-20 PASS 13 minutes
- 2025-06-21 PASS 15 minutes
- 2025-06-22 PASS 14 minutes
- 2025-06-23 PASS 13 minutes
- 2025-06-24 PASS 13 minutes
- 2025-06-25 PASS 12 minutes
- 2025-06-26 PASS 13 minutes
- 2025-06-27 PASS 13 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 15 minutes
- 2025-06-30 PASS 13 minutes
- 2025-07-01
  - PASS 13 minutes
  - PASS 11 minutes
  - PASS 13 minutes
  - PASS 13 minutes
  - PASS 13 minutes
- 2025-07-02 PASS 14 minutes
- 2025-07-03 PASS 13 minutes
- 2025-07-04 PASS 12 minutes
- 2025-07-05 PASS 14 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 12 minutes
- 2025-07-08 PASS 20 minutes
- 2025-07-09 PASS 12 minutes
- 2025-07-10 PASS 13 minutes