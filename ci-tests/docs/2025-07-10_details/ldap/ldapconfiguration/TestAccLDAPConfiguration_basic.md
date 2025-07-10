# ldap/ldapconfiguration/TestAccLDAPConfiguration_basic Test Details
# Found 113 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 112) FAIL
Success rate: 99.12%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029430000) |  | qa | 0.00s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 3 seconds
- 2025-04-13 PASS a second
- 2025-04-14 PASS 2 seconds
- 2025-04-15 PASS a second
- 2025-04-16
  - PASS 2 seconds
  - PASS a second
- 2025-04-17 PASS a second
- 2025-04-18 PASS 2 seconds
- 2025-04-19 PASS a second
- 2025-04-20 PASS a second
- 2025-04-21 PASS 2 seconds
- 2025-04-22 PASS 2 seconds
- 2025-04-23 PASS 2 seconds
- 2025-04-24 PASS a second
- 2025-04-25 PASS 2 seconds
- 2025-04-26 PASS a second
- 2025-04-27 PASS 3 seconds
- 2025-04-28 PASS 2 seconds
- 2025-04-29 PASS 3 seconds
- 2025-04-30
  - PASS 2 seconds
  - PASS 3 seconds
- 2025-05-01
  - PASS a second
  - PASS a second
  - PASS 2 seconds
  - PASS 2 seconds
  - PASS a second
  - PASS a second
  - PASS 3 seconds
- 2025-05-02 PASS 2 seconds
- 2025-05-03 PASS a second
- 2025-05-04 PASS 2 seconds
- 2025-05-05 PASS a second
- 2025-05-06 PASS a second
- 2025-05-07 PASS a second
- 2025-05-08 PASS a second
- 2025-05-09 PASS 2 seconds
- 2025-05-10 PASS a second
- 2025-05-11

### Error 2025-05-11T00:29:43+00:00
```
2025-05-11T00:29:43.7755738Z === RUN   TestAccLDAPConfiguration_basic
2025-05-11T00:29:43.7756513Z     resource_ldap_configuration_test.go:22: Creating execution project: test-acc-tf-p-6644088581948164095
2025-05-11T00:29:43.7757185Z     resource_ldap_configuration_test.go:22: 
2025-05-11T00:29:43.7758265Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-05-11T00:29:43.7760186Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:65
2025-05-11T00:29:43.7762849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:83
2025-05-11T00:29:43.7766448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/ldapconfiguration/resource_ldap_configuration_test.go:22
2025-05-11T00:29:43.7768056Z         	Error:      	Received unexpected error:
2025-05-11T00:29:43.7769776Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7770850Z         	Test:       	TestAccLDAPConfiguration_basic
2025-05-11T00:29:43.7778612Z         	Messages:   	Project creation failed: test-acc-tf-p-6644088581948164095, err: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:43.7780017Z --- FAIL: TestAccLDAPConfiguration_basic (0.01s)
```

- 2025-05-12 PASS a second
- 2025-05-13
  - PASS a second
  - PASS a second
- 2025-05-14 PASS a second
- 2025-05-15 PASS a second
- 2025-05-16 PASS 2 seconds
- 2025-05-17 PASS a second
- 2025-05-18 PASS a second
- 2025-05-19 PASS 2 seconds
- 2025-05-20 PASS a second
- 2025-05-21 PASS a second
- 2025-05-22 PASS a second
- 2025-05-23 PASS a second
- 2025-05-24 PASS a second
- 2025-05-25 PASS 2 seconds
- 2025-05-26 PASS a second
- 2025-05-27 PASS a second
- 2025-05-28
  - PASS 2 seconds
  - PASS 2 seconds
- 2025-05-29 PASS 2 seconds
- 2025-05-30 PASS 2 seconds
- 2025-05-31 PASS 2 seconds
- 2025-06-01
  - PASS 2 seconds
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS a second
  - PASS 2 seconds
- 2025-06-02
  - PASS 2 seconds
  - PASS a second
  - PASS 3 seconds
- 2025-06-03 PASS a second
- 2025-06-04 PASS a second
- 2025-06-05 PASS a second
- 2025-06-06 PASS a second
- 2025-06-07 PASS a second
- 2025-06-08 PASS a second
- 2025-06-09 PASS 3 seconds
- 2025-06-10 PASS 2 seconds
- 2025-06-11
  - PASS a second
  - PASS 2 seconds
- 2025-06-12 PASS 3 seconds
- 2025-06-13 PASS a second
- 2025-06-14 PASS a second
- 2025-06-15 PASS 2 seconds
- 2025-06-16 PASS a second
- 2025-06-17 PASS 3 seconds
- 2025-06-18 PASS 3 seconds
- 2025-06-19 PASS a second
- 2025-06-20 PASS 3 seconds
- 2025-06-21 PASS 3 seconds
- 2025-06-22 PASS 2 seconds
- 2025-06-23 PASS 3 seconds
- 2025-06-24 PASS 2 seconds
- 2025-06-25 PASS a second
- 2025-06-26 PASS a second
- 2025-06-27 PASS a second
- 2025-06-28 PASS a second
- 2025-06-29 PASS 2 seconds
- 2025-06-30 PASS a second
- 2025-07-01
  - PASS a second
  - PASS 2 seconds
  - PASS a second
  - PASS 2 seconds
  - PASS a second
  - PASS 2 seconds
- 2025-07-02 PASS 3 seconds
- 2025-07-03 PASS a second
- 2025-07-04 PASS 3 seconds
- 2025-07-05 PASS 2 seconds
- 2025-07-06 PASS a second
- 2025-07-07 PASS a second
- 2025-07-08 PASS 2 seconds
- 2025-07-09 PASS a second
- 2025-07-10 PASS a second