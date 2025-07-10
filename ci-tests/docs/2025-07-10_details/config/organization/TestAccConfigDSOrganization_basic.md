# config/organization/TestAccConfigDSOrganization_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:29](#error-2025-05-11t0029540000) |  | qa | 0.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 2 seconds
- 2025-04-13 PASS a second
- 2025-04-14 PASS 2 seconds
- 2025-04-15 PASS 2 seconds
- 2025-04-16
  - PASS 2 seconds
  - PASS a second
- 2025-04-17 PASS a second
- 2025-04-18 PASS 2 seconds
- 2025-04-19 PASS 2 seconds
- 2025-04-20 PASS a second
- 2025-04-21 PASS 2 seconds
- 2025-04-22 PASS 2 seconds
- 2025-04-23 PASS a second
- 2025-04-24 PASS 2 seconds
- 2025-04-25 PASS 4 seconds
- 2025-04-26 PASS 5 seconds
- 2025-04-27 PASS 2 seconds
- 2025-04-28 PASS 5 seconds
- 2025-04-29 PASS a second
- 2025-04-30
  - PASS 5 seconds
  - PASS 6 seconds
- 2025-05-01
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 3 seconds
  - PASS 4 seconds
  - PASS 2 seconds
  - PASS 6 seconds
  - PASS 2 seconds
- 2025-05-02 PASS 5 seconds
- 2025-05-03 PASS 2 seconds
- 2025-05-04 PASS 6 seconds
- 2025-05-05 PASS 4 seconds
- 2025-05-06 PASS 5 seconds
- 2025-05-07 PASS 2 seconds
- 2025-05-08 PASS 5 seconds
- 2025-05-09 PASS 6 seconds
- 2025-05-10 PASS 6 seconds
- 2025-05-11

### Error 2025-05-11T00:29:54+00:00
```
2025-05-11T00:29:54.1930167Z === RUN   TestAccConfigDSOrganization_basic
2025-05-11T00:29:54.1934152Z === CONT  TestAccConfigDSOrganization_basic
2025-05-11T00:29:54.1961303Z   
2025-05-11T00:29:54.1997574Z === NAME  TestAccConfigDSOrganization_basic
2025-05-11T00:29:54.1998672Z     resource_organization_test.go:181: Step 1/1 error: Error running pre-apply plan: exit status 1
2025-05-11T00:29:54.1999465Z         
2025-05-11T00:29:54.2000833Z         Error: error getting organization information: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:54.2001992Z         
2025-05-11T00:29:54.2002621Z           with data.mongodbatlas_organizations.test,
2025-05-11T00:29:54.2003981Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_organizations" "test":
2025-05-11T00:29:54.2005021Z           12: 		data "mongodbatlas_organizations" "test" {
2025-05-11T00:29:54.2005565Z         
2025-05-11T00:29:54.2007275Z         Error: error getting organizations information: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:29:54.2008315Z         
2025-05-11T00:29:54.2008923Z           with data.mongodbatlas_organization.test,
2025-05-11T00:29:54.2010053Z           on terraform_plugin_test.tf line 17, in data "mongodbatlas_organization" "test":
2025-05-11T00:29:54.2011055Z           17: 		data "mongodbatlas_organization" "test" {
2025-05-11T00:29:54.2011825Z         
2025-05-11T00:29:54.2037277Z    test_name=TestAccConfigDSOrganization_noAccessShouldFail test_terraform_path=/home/runner/work/_temp/9cb30b14-da37-4aae-9179-acc0e8e8f9a4/terraform test_working_directory=/tmp/plugintest3470164785
2025-05-11T00:29:54.2053612Z --- FAIL: TestAccConfigDSOrganization_basic (0.72s)
```

- 2025-05-12 PASS 5 seconds
- 2025-05-13
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 6 seconds
- 2025-05-16 PASS 5 seconds
- 2025-05-17 PASS 2 seconds
- 2025-05-18 PASS 6 seconds
- 2025-05-19 PASS 4 seconds
- 2025-05-20 PASS 4 seconds
- 2025-05-21 PASS 5 seconds
- 2025-05-22 PASS 5 seconds
- 2025-05-23 PASS 3 seconds
- 2025-05-24 PASS 4 seconds
- 2025-05-25 PASS 4 seconds
- 2025-05-26 PASS 5 seconds
- 2025-05-27 PASS 5 seconds
- 2025-05-28
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-05-29 PASS 6 seconds
- 2025-05-30 PASS 4 seconds
- 2025-05-31 PASS 3 seconds
- 2025-06-01
  - PASS 2 seconds
  - PASS 5 seconds
  - PASS 2 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 2 seconds
- 2025-06-02
  - PASS a second
  - PASS 2 seconds
  - PASS 4 seconds
- 2025-06-03 PASS 6 seconds
- 2025-06-04 PASS 4 seconds
- 2025-06-05 PASS 2 seconds
- 2025-06-06 PASS 2 seconds
- 2025-06-07 PASS 4 seconds
- 2025-06-08 PASS 2 seconds
- 2025-06-09 PASS 6 seconds
- 2025-06-10 PASS 4 seconds
- 2025-06-11
  - PASS 4 seconds
  - PASS 2 seconds
- 2025-06-12 PASS 4 seconds
- 2025-06-13 PASS 6 seconds
- 2025-06-14 PASS 5 seconds
- 2025-06-15 PASS 4 seconds
- 2025-06-16 PASS 6 seconds
- 2025-06-17 PASS 6 seconds
- 2025-06-18
  - PASS 4 seconds
  - PASS 4 seconds
- 2025-06-19 PASS a second
- 2025-06-20 PASS 3 seconds
- 2025-06-21 PASS a second
- 2025-06-22 PASS 4 seconds
- 2025-06-23 PASS 3 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25 PASS 4 seconds
- 2025-06-26 PASS 6 seconds
- 2025-06-27 PASS 5 seconds
- 2025-06-28 PASS 2 seconds
- 2025-06-29 PASS a second
- 2025-06-30 PASS 5 seconds
- 2025-07-01
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 6 seconds
  - PASS 2 seconds
- 2025-07-02 PASS 2 seconds
- 2025-07-03 PASS 4 seconds
- 2025-07-04 PASS 3 seconds
- 2025-07-05 PASS 3 seconds
- 2025-07-06 PASS a second
- 2025-07-07 PASS 6 seconds
- 2025-07-08 PASS 4 seconds
- 2025-07-09 PASS 6 seconds
- 2025-07-10 PASS 5 seconds