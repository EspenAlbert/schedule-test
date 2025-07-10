# ldap/ldapconfiguration/TestAccLDAPConfiguration_withVerify_CACertificateComplete Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 111) FAIL(x 2)
Success rate: 98.23%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa |  | 0.00s
[2025-06-05 00:32](#error-2025-06-05t0032260000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6840e4b9c939f274132503e6/clusters/test-acc-tf-c-1528657093018867601 | dev | flaky_500 | 186.01s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 15 minutes
- 2025-04-13 PASS 18 minutes
- 2025-04-14 PASS 12 minutes
- 2025-04-15 PASS 15 minutes
- 2025-04-16
  - PASS 14 minutes
  - PASS 20 minutes
- 2025-04-17 PASS 14 minutes
- 2025-04-18 PASS 16 minutes
- 2025-04-19 PASS 14 minutes
- 2025-04-20 PASS 16 minutes
- 2025-04-21 PASS 15 minutes
- 2025-04-22 PASS 15 minutes
- 2025-04-23 PASS 16 minutes
- 2025-04-24 PASS 17 minutes
- 2025-04-25 PASS 13 minutes
- 2025-04-26 PASS 15 minutes
- 2025-04-27 PASS 17 minutes
- 2025-04-28 PASS 17 minutes
- 2025-04-29 PASS 14 minutes
- 2025-04-30
  - PASS 15 minutes
  - PASS 17 minutes
- 2025-05-01
  - PASS 16 minutes
  - PASS 16 minutes
  - PASS 14 minutes
  - PASS 15 minutes
  - PASS 15 minutes
  - PASS 17 minutes
  - PASS 12 minutes
- 2025-05-02 PASS 17 minutes
- 2025-05-03 PASS 14 minutes
- 2025-05-04 PASS 14 minutes
- 2025-05-05 PASS 14 minutes
- 2025-05-06 PASS 14 minutes
- 2025-05-07 PASS 18 minutes
- 2025-05-08 PASS 17 minutes
- 2025-05-09 PASS 18 minutes
- 2025-05-10 PASS 15 minutes
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.7780790Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-05-11T00:29:43.7781658Z     resource_ldap_configuration_test.go:33: Creating execution project: test-acc-tf-p-5971254810275936682
2025-05-11T00:29:43.7782469Z     resource_ldap_configuration_test.go:33: 
2025-05-11T00:29:43.7783545Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.7785474Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.7787333Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/cluster.go:77
2025-05-11T00:29:43.7789515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:33
2025-05-11T00:29:43.7790480Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.7791500Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7792405Z         	Test:       	TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-05-11T00:29:43.7793629Z         	Messages:   	Project creation failed: test-acc-tf-p-5971254810275936682, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7794532Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (0.01s)
```

- 2025-05-12 PASS 15 minutes
- 2025-05-13
  - PASS 17 minutes
  - PASS 15 minutes
- 2025-05-14 PASS 16 minutes
- 2025-05-15 PASS 16 minutes
- 2025-05-16 PASS 17 minutes
- 2025-05-17 PASS 16 minutes
- 2025-05-18 PASS 17 minutes
- 2025-05-19 PASS 17 minutes
- 2025-05-20 PASS 15 minutes
- 2025-05-21 PASS 17 minutes
- 2025-05-22 PASS 17 minutes
- 2025-05-23 PASS 16 minutes
- 2025-05-24 PASS 15 minutes
- 2025-05-25 PASS 17 minutes
- 2025-05-26 PASS 15 minutes
- 2025-05-27 PASS 14 minutes
- 2025-05-28
  - PASS 18 minutes
  - PASS 15 minutes
- 2025-05-29 PASS 16 minutes
- 2025-05-30 PASS 14 minutes
- 2025-05-31 PASS 15 minutes
- 2025-06-01
  - PASS 14 minutes
  - PASS 13 minutes
  - PASS 14 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 15 minutes
- 2025-06-02
  - PASS 16 minutes
  - PASS 17 minutes
  - PASS 13 minutes
- 2025-06-03 PASS 14 minutes
- 2025-06-04 PASS 18 minutes
- 2025-06-05

### Error 2025-06-05T00:32:26+00:00
```
2025-06-05T00:32:26.7921912Z === RUN   TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-05T00:32:26.7937056Z    test_name=TestAccLDAPConfiguration_withVerify_CACertificateComplete
2025-06-05T00:32:26.7937819Z     resource_ldap_configuration_test.go:43: Step 1/1 error: Error running apply: exit status 1
2025-06-05T00:32:26.7938349Z         
2025-06-05T00:32:26.7940201Z         Error: error creating advanced cluster: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6840e4b9c939f274132503e6/clusters/test-acc-tf-c-1528657093018867601 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2025-06-05T00:32:26.7941488Z         
2025-06-05T00:32:26.7941929Z           with mongodbatlas_advanced_cluster.cluster_info,
2025-06-05T00:32:26.7942982Z           on terraform_plugin_test.tf line 13, in resource "mongodbatlas_advanced_cluster" "cluster_info":
2025-06-05T00:32:26.7943739Z           13: resource "mongodbatlas_advanced_cluster" "cluster_info" {
2025-06-05T00:32:26.7944160Z         
2025-06-05T00:32:26.7944586Z --- FAIL: TestAccLDAPConfiguration_withVerify_CACertificateComplete (186.14s)
```

- 2025-06-06 PASS 16 minutes
- 2025-06-07 PASS 15 minutes
- 2025-06-08 PASS 16 minutes
- 2025-06-09 PASS 16 minutes
- 2025-06-10 PASS 22 minutes
- 2025-06-11
  - PASS 16 minutes
  - PASS 16 minutes
- 2025-06-12 PASS 16 minutes
- 2025-06-13 PASS 17 minutes
- 2025-06-14 PASS 16 minutes
- 2025-06-15 PASS 16 minutes
- 2025-06-16 PASS 15 minutes
- 2025-06-17 PASS 14 minutes
- 2025-06-18 PASS 15 minutes
- 2025-06-19 PASS 16 minutes
- 2025-06-20 PASS 15 minutes
- 2025-06-21 PASS 14 minutes
- 2025-06-22 PASS 16 minutes
- 2025-06-23 PASS 14 minutes
- 2025-06-24 PASS 16 minutes
- 2025-06-25 PASS 14 minutes
- 2025-06-26 PASS 15 minutes
- 2025-06-27 PASS 15 minutes
- 2025-06-28 PASS 14 minutes
- 2025-06-29 PASS 17 minutes
- 2025-06-30 PASS 14 minutes
- 2025-07-01
  - PASS 16 minutes
  - PASS 13 minutes
  - PASS 16 minutes
  - PASS 15 minutes
  - PASS 14 minutes
  - PASS 15 minutes
- 2025-07-02 PASS 15 minutes
- 2025-07-03 PASS 17 minutes
- 2025-07-04 PASS 15 minutes
- 2025-07-05 PASS 13 minutes
- 2025-07-06 PASS 16 minutes
- 2025-07-07 PASS 16 minutes
- 2025-07-08 PASS 16 minutes
- 2025-07-09 PASS 30 minutes
- 2025-07-10 PASS 14 minutes