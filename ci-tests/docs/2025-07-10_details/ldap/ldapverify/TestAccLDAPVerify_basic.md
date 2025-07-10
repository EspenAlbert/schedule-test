# ldap/ldapverify/TestAccLDAPVerify_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029440000) |  | qa |  | 0.00s
[2025-06-05 00:38](#error-2025-06-05t0038180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-4539374361022603642 | dev | flaky_500 | 180.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 minutes
- 2025-04-13 PASS 3 minutes
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
  - PASS 3 minutes
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

### Error 2025-05-11T00:29:44+00:00
```
2025-05-11T00:29:44.5649445Z === RUN   TestAccLDAPVerify_basic
2025-05-11T00:29:44.5650120Z     resource_ldap_verify_test.go:22: Creating execution project: test-acc-tf-p-3684186193846778081
2025-05-11T00:29:44.5650756Z     resource_ldap_verify_test.go:22: 
2025-05-11T00:29:44.5651813Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:44.5653841Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:44.5655774Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:102
2025-05-11T00:29:44.5657839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-05-11T00:29:44.5659958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2025-05-11T00:29:44.5660869Z         	Error:      	Received unexpected error:
2025-05-11T00:29:44.5661893Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.5662630Z         	Test:       	TestAccLDAPVerify_basic
2025-05-11T00:29:44.5663763Z         	Messages:   	Project creation failed: test-acc-tf-p-3684186193846778081, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:44.5664547Z --- FAIL: TestAccLDAPVerify_basic (0.01s)
```

- 2025-05-12 PASS 3 minutes
- 2025-05-13
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-05-14 PASS 3 minutes
- 2025-05-15 PASS 3 minutes
- 2025-05-16 PASS 3 minutes
- 2025-05-17 PASS 3 minutes
- 2025-05-18 PASS 3 minutes
- 2025-05-19 PASS 3 minutes
- 2025-05-20 PASS 3 minutes
- 2025-05-21 PASS 3 minutes
- 2025-05-22 PASS 3 minutes
- 2025-05-23 PASS 3 minutes
- 2025-05-24 PASS 3 minutes
- 2025-05-25 PASS 3 minutes
- 2025-05-26 PASS 3 minutes
- 2025-05-27 PASS 3 minutes
- 2025-05-28
  - PASS 3 minutes
  - PASS 3 minutes
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

### Error 2025-06-05T00:38:18+00:00
```
2025-06-05T00:38:18.0673007Z === RUN   TestAccLDAPVerify_basic
2025-06-05T00:38:18.0673656Z     resource_ldap_verify_test.go:22: Creating execution cluster: test-acc-tf-c-4539374361022603642
2025-06-05T00:38:18.0674257Z 2025/06/05 00:31:46 [DEBUG] Waiting for state to become: [IDLE]
2025-06-05T00:38:18.0674737Z     resource_ldap_verify_test.go:22: 
2025-06-05T00:38:18.0675752Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:48
2025-06-05T00:38:18.0677622Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:112
2025-06-05T00:38:18.0679621Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:68
2025-06-05T00:38:18.0681671Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapverify/resource_ldap_verify_test.go:22
2025-06-05T00:38:18.0682739Z         	Error:      	Received unexpected error:
2025-06-05T00:38:18.0685301Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-4539374361022603642 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0686591Z         	Test:       	TestAccLDAPVerify_basic
2025-06-05T00:38:18.0688749Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4539374361022603642, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132504a2/clusters/test-acc-tf-c-4539374361022603642 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:38:18.0690188Z --- FAIL: TestAccLDAPVerify_basic (180.75s)
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
- 2025-06-28 PASS 3 minutes
- 2025-06-29 PASS 3 minutes
- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10 PASS 3 minutes