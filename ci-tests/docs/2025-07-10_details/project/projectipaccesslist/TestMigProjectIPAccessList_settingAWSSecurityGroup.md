# project/projectipaccesslist/TestMigProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa | 0.00s
[2025-06-05 00:59](#error-2025-06-05t0059450000) |  | dev | 1528.05s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 minutes
- 2025-04-13 PASS 2 minutes
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS 2 minutes
- 2025-04-16
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-04-17 PASS 2 minutes
- 2025-04-18 PASS 3 minutes
- 2025-04-19 PASS 3 minutes
- 2025-04-20 PASS 2 minutes
- 2025-04-21 PASS 3 minutes
- 2025-04-22 PASS 2 minutes
- 2025-04-23 PASS 3 minutes
- 2025-04-24 PASS 2 minutes
- 2025-04-25 PASS 2 minutes
- 2025-04-26 PASS 3 minutes
- 2025-04-27 PASS 3 minutes
- 2025-04-28 PASS 2 minutes
- 2025-04-29 PASS 2 minutes
- 2025-04-30
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-05-02 PASS 3 minutes
- 2025-05-03 PASS 2 minutes
- 2025-05-04 PASS 2 minutes
- 2025-05-05 PASS 2 minutes
- 2025-05-06 PASS 2 minutes
- 2025-05-07 PASS 3 minutes
- 2025-05-08 PASS 3 minutes
- 2025-05-09 PASS 3 minutes
- 2025-05-10 PASS 2 minutes
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.4022590Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-05-11T00:30:20.4023311Z     resource_project_ip_access_list_migration_test.go:59: Creating execution project: test-acc-tf-p-9146267544697327767
2025-05-11T00:30:20.4023951Z     resource_project_ip_access_list_migration_test.go:59: 
2025-05-11T00:30:20.4024949Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:20.4026759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:20.4028991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_migration_test.go:59
2025-05-11T00:30:20.4029902Z         	Error:      	Received unexpected error:
2025-05-11T00:30:20.4030814Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4031475Z         	Test:       	TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-05-11T00:30:20.4032763Z         	Messages:   	Project creation failed: test-acc-tf-p-9146267544697327767, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4033525Z --- FAIL: TestMigProjectIPAccessList_settingAWSSecurityGroup (0.00s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-05-14 PASS 3 minutes
- 2025-05-15 PASS 2 minutes
- 2025-05-16 PASS 3 minutes
- 2025-05-17 PASS 3 minutes
- 2025-05-18 PASS 2 minutes
- 2025-05-19 PASS 3 minutes
- 2025-05-20 PASS 2 minutes
- 2025-05-21 PASS 2 minutes
- 2025-05-22 PASS 3 minutes
- 2025-05-23 PASS 2 minutes
- 2025-05-24 PASS 3 minutes
- 2025-05-25 PASS 2 minutes
- 2025-05-26 PASS 2 minutes
- 2025-05-27
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-05-28
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-05-29 PASS 3 minutes
- 2025-05-30 PASS 3 minutes
- 2025-05-31 PASS 2 minutes
- 2025-06-01
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 2 minutes
- 2025-06-02
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-03 PASS 2 minutes
- 2025-06-04 PASS 3 minutes
- 2025-06-05

### Error 2025-06-05T00:59:45+00:00
```
2025-06-05T00:59:45.7023827Z === RUN   TestMigProjectIPAccessList_settingAWSSecurityGroup
2025-06-05T00:59:45.7034065Z   
2025-06-05T00:59:45.7034965Z     resource_project_ip_access_list_migration_test.go:71: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:59:45.7035769Z         
2025-06-05T00:59:45.7036652Z         Error: error creating MongoDB Network Peering Connection: context deadline exceeded
2025-06-05T00:59:45.7037365Z         
2025-06-05T00:59:45.7037930Z           with mongodbatlas_network_peering.test,
2025-06-05T00:59:45.7039071Z           on terraform_plugin_test.tf line 21, in resource "mongodbatlas_network_peering" "test":
2025-06-05T00:59:45.7040154Z           21: 		resource "mongodbatlas_network_peering" "test" {
2025-06-05T00:59:45.7040717Z         
2025-06-05T00:59:45.7048276Z    test_step_number=1
2025-06-05T00:59:45.7049185Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-06-05T00:59:45.7050170Z         
2025-06-05T00:59:45.7051591Z         Error: error deleting MongoDB Network Peering Container (6840e4cfc939f274132512b0): couldn't find resource (21 retries)
2025-06-05T00:59:45.7052530Z         
2025-06-05T00:59:45.7053121Z --- FAIL: TestMigProjectIPAccessList_settingAWSSecurityGroup (1528.52s)
```

- 2025-06-06 PASS 3 minutes
- 2025-06-07 PASS 2 minutes
- 2025-06-08 PASS 3 minutes
- 2025-06-09 PASS 3 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-06-12 PASS 3 minutes
- 2025-06-13 PASS 3 minutes
- 2025-06-14 PASS 3 minutes
- 2025-06-15 PASS 3 minutes
- 2025-06-16 PASS 3 minutes
- 2025-06-17 PASS 3 minutes
- 2025-06-18 PASS 3 minutes
- 2025-06-19 PASS 3 minutes
- 2025-06-20 PASS 3 minutes
- 2025-06-21 PASS 3 minutes
- 2025-06-22 PASS 2 minutes
- 2025-06-23 PASS 2 minutes
- 2025-06-24 PASS 3 minutes
- 2025-06-25 PASS 3 minutes
- 2025-06-26 PASS 3 minutes
- 2025-06-27 PASS 2 minutes
- 2025-06-28 PASS 3 minutes
- 2025-06-29 PASS 3 minutes
- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 2 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 2 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 2 minutes
- 2025-07-07 PASS 2 minutes
- 2025-07-08 PASS 2 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10 PASS 3 minutes