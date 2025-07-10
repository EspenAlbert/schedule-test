# project/projectipaccesslist/TestAccProjectIPAccesslist_settingIPAddress Test Details
# Found 114 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL(x 2)
Success rate: 98.25%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030200000) |  | qa | 0.00s
[2025-06-07 00:38](#error-2025-06-07t0038520000) |  | dev | 11.02s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 2 minutes
- 2025-04-13 PASS 2 minutes
- 2025-04-14 PASS 26 seconds
- 2025-04-15 PASS 2 minutes
- 2025-04-16
  - PASS 2 minutes
  - PASS 2 minutes
- 2025-04-17 PASS 4 minutes
- 2025-04-18 PASS 23 seconds
- 2025-04-19 PASS 26 seconds
- 2025-04-20 PASS 23 seconds
- 2025-04-21 PASS 25 seconds
- 2025-04-22 PASS 23 seconds
- 2025-04-23 PASS 25 seconds
- 2025-04-24 PASS 24 seconds
- 2025-04-25 PASS 2 minutes
- 2025-04-26 PASS 4 minutes
- 2025-04-27 PASS 26 seconds
- 2025-04-28 PASS 23 seconds
- 2025-04-29 PASS 23 seconds
- 2025-04-30
  - PASS 2 minutes
  - PASS 27 seconds
- 2025-05-01
  - PASS 4 minutes
  - PASS 24 seconds
  - PASS 2 minutes
  - PASS 24 seconds
  - PASS 23 seconds
  - PASS 26 seconds
  - PASS 23 seconds
- 2025-05-02 PASS 24 seconds
- 2025-05-03 PASS 23 seconds
- 2025-05-04 PASS 24 seconds
- 2025-05-05 PASS 23 seconds
- 2025-05-06 PASS 2 minutes
- 2025-05-07 PASS 26 seconds
- 2025-05-08 PASS 23 seconds
- 2025-05-09 PASS 26 seconds
- 2025-05-10 PASS 24 seconds
- 2025-05-11

### Error 2025-05-11T00:30:20+00:00
```
2025-05-11T00:30:20.4033963Z === RUN   TestAccProjectIPAccesslist_settingIPAddress
2025-05-11T00:30:20.4034758Z     resource_project_ip_access_list_test.go:24: Creating execution project: test-acc-tf-p-2666357325925105723
2025-05-11T00:30:20.4035330Z     resource_project_ip_access_list_test.go:24: 
2025-05-11T00:30:20.4036570Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:30:20.4038397Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:30:20.4040679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectipaccesslist/resource_project_ip_access_list_test.go:24
2025-05-11T00:30:20.4041543Z         	Error:      	Received unexpected error:
2025-05-11T00:30:20.4042659Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4043279Z         	Test:       	TestAccProjectIPAccesslist_settingIPAddress
2025-05-11T00:30:20.4044371Z         	Messages:   	Project creation failed: test-acc-tf-p-2666357325925105723, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:20.4045090Z --- FAIL: TestAccProjectIPAccesslist_settingIPAddress (0.00s)
```

- 2025-05-12 PASS 27 seconds
- 2025-05-13
  - PASS 24 seconds
  - PASS 23 seconds
- 2025-05-14 PASS 26 seconds
- 2025-05-15 PASS 34 seconds
- 2025-05-16 PASS 25 seconds
- 2025-05-17 PASS 34 seconds
- 2025-05-18 PASS 23 seconds
- 2025-05-19 PASS 24 seconds
- 2025-05-20 PASS 23 seconds
- 2025-05-21 PASS 2 minutes
- 2025-05-22 PASS 23 seconds
- 2025-05-23 PASS 23 seconds
- 2025-05-24 PASS 25 seconds
- 2025-05-25 PASS 2 minutes
- 2025-05-26 PASS 2 minutes
- 2025-05-27
  - PASS 23 seconds
  - PASS 24 seconds
- 2025-05-28
  - PASS 23 seconds
  - PASS 24 seconds
- 2025-05-29 PASS 26 seconds
- 2025-05-30 PASS 25 seconds
- 2025-05-31 PASS 24 seconds
- 2025-06-01
  - PASS 24 seconds
  - PASS 24 seconds
  - PASS 34 seconds
  - PASS 24 seconds
  - PASS 24 seconds
  - PASS 23 seconds
- 2025-06-02
  - PASS 23 seconds
  - PASS 27 seconds
  - PASS 24 seconds
- 2025-06-03 PASS 2 minutes
- 2025-06-04 PASS 2 minutes
- 2025-06-05 PASS 4 minutes
- 2025-06-06 PASS 2 minutes
- 2025-06-07

### Error 2025-06-07T00:38:52+00:00
```
2025-06-07T00:38:52.9749870Z === RUN   TestAccProjectIPAccesslist_settingIPAddress
2025-06-07T00:38:52.9756663Z === CONT  TestAccProjectIPAccesslist_settingIPAddress
2025-06-07T00:38:52.9763490Z    test_step_number=1
2025-06-07T00:38:52.9764014Z     resource_project_ip_access_list_test.go:31: Step 1/3 error: Error running apply: exit status 1
2025-06-07T00:38:52.9764458Z         
2025-06-07T00:38:52.9764847Z         Error: Provider produced inconsistent result after apply
2025-06-07T00:38:52.9765184Z         
2025-06-07T00:38:52.9765640Z         When applying changes to mongodbatlas_project_ip_access_list.test, provider
2025-06-07T00:38:52.9766455Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2025-06-07T00:38:52.9767170Z         unexpected new value: .comment: was cty.StringVal("TestAcc for ipAddress
2025-06-07T00:38:52.9767729Z         (179.154.226.70)"), but now cty.StringVal("TestAcc for cidrBlock
2025-06-07T00:38:52.9768111Z         (179.154.226.70/32)").
2025-06-07T00:38:52.9768357Z         
2025-06-07T00:38:52.9768945Z         This is a bug in the provider, which should be reported in the provider's own
2025-06-07T00:38:52.9769364Z         issue tracker.
2025-06-07T00:38:52.9772266Z    test_name=TestAccProjectIPAccessList_settingCIDRBlock test_terraform_path=/home/runner/work/_temp/6114f0b9-9ea4-425e-98db-1d0c9ebfc652/terraform
2025-06-07T00:38:52.9775199Z --- FAIL: TestAccProjectIPAccesslist_settingIPAddress (11.18s)
```

- 2025-06-08 PASS 25 seconds
- 2025-06-09 PASS 27 seconds
- 2025-06-10 PASS 26 seconds
- 2025-06-11
  - PASS 24 seconds
  - PASS 23 seconds
- 2025-06-12 PASS 4 minutes
- 2025-06-13 PASS 27 seconds
- 2025-06-14 PASS 24 seconds
- 2025-06-15 PASS 27 seconds
- 2025-06-16 PASS 34 seconds
- 2025-06-17 PASS 24 seconds
- 2025-06-18 PASS 23 seconds
- 2025-06-19 PASS 23 seconds
- 2025-06-20 PASS 24 seconds
- 2025-06-21 PASS 2 minutes
- 2025-06-22 PASS 24 seconds
- 2025-06-23 PASS 23 seconds
- 2025-06-24 PASS 2 minutes
- 2025-06-25 PASS 27 seconds
- 2025-06-26 PASS 26 seconds
- 2025-06-27 PASS 2 minutes
- 2025-06-28 PASS 24 seconds
- 2025-06-29 PASS 2 minutes
- 2025-06-30 PASS 2 minutes
- 2025-07-01
  - PASS 24 seconds
  - PASS 24 seconds
  - PASS 27 seconds
  - PASS 24 seconds
  - PASS 23 seconds
  - PASS 23 seconds
- 2025-07-02 PASS 4 minutes
- 2025-07-03 PASS 24 seconds
- 2025-07-04 PASS 24 seconds
- 2025-07-05 PASS 23 seconds
- 2025-07-06 PASS 33 seconds
- 2025-07-07 PASS 23 seconds
- 2025-07-08 PASS 23 seconds
- 2025-07-09 PASS 23 seconds
- 2025-07-10 PASS 26 seconds