# project/projectipaccesslist/TestAccProjectIPAccessList_settingAWSSecurityGroup Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa | 0.00s
[2025-06-05 00:59](#error-2025-06-05t0059450000) | CONTAINER_ALREADY_EXISTS /api/atlas/v2/groups/6840e4ca161ca93c1f052afb/containers | dev | 0.10s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 minutes
- 2025-04-13 PASS 5 minutes
- 2025-04-14 PASS 3 minutes
- 2025-04-15 PASS 3 minutes
- 2025-04-16
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-04-17 PASS 3 minutes
- 2025-04-18 PASS 3 minutes
- 2025-04-19 PASS 3 minutes
- 2025-04-20 PASS 3 minutes
- 2025-04-21 PASS 3 minutes
- 2025-04-22 PASS 3 minutes
- 2025-04-23 PASS 3 minutes
- 2025-04-24 PASS 3 minutes
- 2025-04-25 PASS 3 minutes
- 2025-04-26 PASS 3 minutes
- 2025-04-27 PASS 3 minutes
- 2025-04-28 PASS 3 minutes
- 2025-04-29 PASS 3 minutes
- 2025-04-30
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-01
  - PASS 5 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-02 PASS 3 minutes
- 2025-05-03 PASS 3 minutes
- 2025-05-04 PASS 3 minutes
- 2025-05-05 PASS 3 minutes
- 2025-05-06 PASS 3 minutes
- 2025-05-07 PASS 3 minutes
- 2025-05-08 PASS 3 minutes
- 2025-05-09 PASS 3 minutes
- 2025-05-10 PASS 3 minutes
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.4056512Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-05-11T00:30:20.4057190Z     resource_project_ip_access_list_test.go:82: Creating execution project: test-acc-tf-p-8207137205862178734
2025-05-11T00:30:20.4057750Z     resource_project_ip_access_list_test.go:82: 
2025-05-11T00:30:20.4058706Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:20.4060578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:20.4063037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:82
2025-05-11T00:30:20.4063919Z         	Error:      	Received unexpected error:
2025-05-11T00:30:20.4064817Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4065460Z         	Test:       	TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-05-11T00:30:20.4066659Z         	Messages:   	Project creation failed: test-acc-tf-p-8207137205862178734, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4067414Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (0.00s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-14 PASS 4 minutes
- 2025-05-15 PASS 5 minutes
- 2025-05-16 PASS 3 minutes
- 2025-05-17 PASS 3 minutes
- 2025-05-18 PASS 3 minutes
- 2025-05-19 PASS 3 minutes
- 2025-05-20 PASS 3 minutes
- 2025-05-21 PASS 3 minutes
- 2025-05-22 PASS 3 minutes
- 2025-05-23 PASS 3 minutes
- 2025-05-24 PASS 3 minutes
- 2025-05-25 PASS 5 minutes
- 2025-05-26 PASS 3 minutes
- 2025-05-27
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-28
  - PASS 3 minutes
  - PASS 5 minutes
- 2025-05-29 PASS 3 minutes
- 2025-05-30 PASS 3 minutes
- 2025-05-31 PASS 3 minutes
- 2025-06-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-02
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-06-03 PASS 3 minutes
- 2025-06-04 PASS 3 minutes
- 2025-06-05

### Error 2025-06-05T00:59:45+00:00
```
2025-06-05T00:59:45.7056587Z === RUN   TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-06-05T00:59:45.7061245Z === CONT  TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-06-05T00:59:45.7089081Z === NAME  TestAccProjectIPAccessList_settingAWSSecurityGroup
2025-06-05T00:59:45.7090156Z     resource_project_ip_access_list_test.go:94: Step 1/2 error: Error running apply: exit status 1
2025-06-05T00:59:45.7090898Z         
2025-06-05T00:59:45.7094376Z         Error: error creating MongoDB Network Peering Container: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4ca161ca93c1f052afb/containers POST: HTTP 409 Conflict (Error code: "CONTAINER_ALREADY_EXISTS") Detail: A container already exists for group 6840e4ca161ca93c1f052afb. Reason: Conflict. Params: [6840e4ca161ca93c1f052afb], BadRequestDetail: 
2025-06-05T00:59:45.7096760Z         
2025-06-05T00:59:45.7097339Z           with mongodbatlas_network_container.test,
2025-06-05T00:59:45.7098488Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_network_container" "test":
2025-06-05T00:59:45.7099542Z           12: 		resource "mongodbatlas_network_container" "test" {
2025-06-05T00:59:45.7100092Z         
2025-06-05T00:59:45.7100627Z --- FAIL: TestAccProjectIPAccessList_settingAWSSecurityGroup (0.95s)
```

- 2025-06-06 PASS 3 minutes
- 2025-06-07 PASS 3 minutes
- 2025-06-08 PASS 3 minutes
- 2025-06-09 PASS 3 minutes
- 2025-06-10 PASS 3 minutes
- 2025-06-11
  - PASS 3 minutes
  - PASS 3 minutes
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
- 2025-06-22 PASS 3 minutes
- 2025-06-23 PASS 3 minutes
- 2025-06-24 PASS 3 minutes
- 2025-06-25 PASS 3 minutes
- 2025-06-26 PASS 3 minutes
- 2025-06-27 PASS 3 minutes
- 2025-06-28 PASS 5 minutes
- 2025-06-29 PASS 3 minutes
- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 5 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10 PASS 3 minutes