# project/projectipaccesslist/TestAccProjectIPAccessList_settingCIDRBlock Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa | 0.00s
[2025-06-07 00:38](#error-2025-06-07t0038520000) | Step 1 1,2 | dev | 11.04s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 25 seconds
- 2025-04-13 PASS 22 seconds
- 2025-04-14 PASS 25 seconds
- 2025-04-15 PASS 23 seconds
- 2025-04-16
  - PASS 22 seconds
  - PASS 33 seconds
- 2025-04-17 PASS 23 seconds
- 2025-04-18 PASS 2 minutes
- 2025-04-19 PASS 26 seconds
- 2025-04-20 PASS 23 seconds
- 2025-04-21 PASS 24 seconds
- 2025-04-22 PASS 23 seconds
- 2025-04-23 PASS 25 seconds
- 2025-04-24 PASS 2 minutes
- 2025-04-25 PASS 23 seconds
- 2025-04-26 PASS 24 seconds
- 2025-04-27 PASS 25 seconds
- 2025-04-28 PASS 2 minutes
- 2025-04-29 PASS 2 minutes
- 2025-04-30
  - PASS 36 seconds
  - PASS 26 seconds
- 2025-05-01
  - PASS 23 seconds
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 23 seconds
  - PASS 23 seconds
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-05-02 PASS 4 minutes
- 2025-05-03 PASS 23 seconds
- 2025-05-04 PASS 2 minutes
- 2025-05-05 PASS 2 minutes
- 2025-05-06 PASS 22 seconds
- 2025-05-07 PASS 25 seconds
- 2025-05-08 PASS 2 minutes
- 2025-05-09 PASS 2 minutes
- 2025-05-10 PASS 2 minutes
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.4045636Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2025-05-11T00:30:20.4046288Z     resource_project_ip_access_list_test.go:56: Creating execution project: test-acc-tf-p-255457322028037240
2025-05-11T00:30:20.4046855Z     resource_project_ip_access_list_test.go:56: 
2025-05-11T00:30:20.4047806Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:20.4049615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:20.4051763Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:56
2025-05-11T00:30:20.4052805Z         	Error:      	Received unexpected error:
2025-05-11T00:30:20.4053710Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4054313Z         	Test:       	TestAccProjectIPAccessList_settingCIDRBlock
2025-05-11T00:30:20.4055354Z         	Messages:   	Project creation failed: test-acc-tf-p-255457322028037240, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4056078Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (0.01s)
```

- 2025-05-12 PASS 2 minutes
- 2025-05-13
  - PASS 23 seconds
  - PASS 23 seconds
- 2025-05-14 PASS 25 seconds
- 2025-05-15 PASS 2 minutes
- 2025-05-16 PASS 2 minutes
- 2025-05-17 PASS 24 seconds
- 2025-05-18 PASS 22 seconds
- 2025-05-19 PASS 23 seconds
- 2025-05-20 PASS 4 minutes
- 2025-05-21 PASS 43 seconds
- 2025-05-22 PASS 2 minutes
- 2025-05-23 PASS 23 seconds
- 2025-05-24 PASS 24 seconds
- 2025-05-25 PASS 23 seconds
- 2025-05-26 PASS 23 seconds
- 2025-05-27
  - PASS 23 seconds
  - PASS 2 minutes
- 2025-05-28
  - PASS 23 seconds
  - PASS 24 seconds
- 2025-05-29 PASS 2 minutes
- 2025-05-30 PASS 2 minutes
- 2025-05-31 PASS 23 seconds
- 2025-06-01
  - PASS 2 minutes
  - PASS 24 seconds
  - PASS 23 seconds
  - PASS 34 seconds
  - PASS 23 seconds
  - PASS 2 minutes
- 2025-06-02
  - PASS 33 seconds
  - PASS 26 seconds
  - PASS 24 seconds
- 2025-06-03 PASS 23 seconds
- 2025-06-04 PASS 25 seconds
- 2025-06-05 PASS 2 minutes
- 2025-06-06 PASS 25 seconds
- 2025-06-07

### Error 2025-06-07T00:38:52+00:00
```
2025-06-07T00:38:52.9750659Z === RUN   TestAccProjectIPAccessList_settingCIDRBlock
2025-06-07T00:38:52.9755309Z === CONT  TestAccProjectIPAccessList_settingCIDRBlock
2025-06-07T00:38:52.9772944Z === NAME  TestAccProjectIPAccessList_settingCIDRBlock
2025-06-07T00:38:52.9773884Z     resource_project_ip_access_list_test.go:63: Step 1/2 error: Check failed: Check 1/8 error: project ip access list entry (179.154.226.70/32) does not exist
2025-06-07T00:38:52.9774723Z         Check 2/8 error: project ip access list entry (179.154.226.70) does not exist
2025-06-07T00:38:52.9778689Z --- FAIL: TestAccProjectIPAccessList_settingCIDRBlock (11.44s)
```

- 2025-06-08 PASS 35 seconds
- 2025-06-09 PASS 26 seconds
- 2025-06-10 PASS 2 minutes
- 2025-06-11
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-06-12 PASS 2 minutes
- 2025-06-13 PASS 26 seconds
- 2025-06-14 PASS 23 seconds
- 2025-06-15 PASS 25 seconds
- 2025-06-16 PASS 23 seconds
- 2025-06-17 PASS 4 minutes
- 2025-06-18 PASS 23 seconds
- 2025-06-19 PASS 23 seconds
- 2025-06-20 PASS 2 minutes
- 2025-06-21 PASS 36 seconds
- 2025-06-22 PASS 23 seconds
- 2025-06-23 PASS 4 minutes
- 2025-06-24 PASS 26 seconds
- 2025-06-25 PASS 26 seconds
- 2025-06-26 PASS 25 seconds
- 2025-06-27 PASS 23 seconds
- 2025-06-28 PASS 2 minutes
- 2025-06-29 PASS 2 minutes
- 2025-06-30 PASS 4 minutes
- 2025-07-01
  - PASS 2 minutes
  - PASS 2 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 23 seconds
  - PASS 23 seconds
- 2025-07-02 PASS 34 seconds
- 2025-07-03 PASS 23 seconds
- 2025-07-04 PASS 23 seconds
- 2025-07-05 PASS 23 seconds
- 2025-07-06 PASS 23 seconds
- 2025-07-07 PASS 23 seconds
- 2025-07-08 PASS 23 seconds
- 2025-07-09 PASS 23 seconds
- 2025-07-10 PASS 35 seconds